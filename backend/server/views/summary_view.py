from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
import pymongo
from bson.json_util import loads, dumps
from datetime import date

connectionString = "mongodb+srv://prothomantorbanik:antor_123@mymongoo.u3i4d.mongodb.net/?retryWrites=true&w=majority&appName=MyMongoo"

client = pymongo.MongoClient(connectionString, connectTimeoutMS=15000, socketTimeoutMS=None, connect=False, maxPoolsize=1)
db = client['MyMongoDB']
collection = db['summary']

class Summary(APIView):
	def get(self, request, format=None):
		page_size = 10
		page = int(request.query_params['page'])
		pages = 1 + collection.count_documents({}) // page_size
		sort = request.query_params['sort']
		sort_dir = pymongo.ASCENDING if sort == 'ASC' else pymongo.DESCENDING
		products = loads(dumps(collection.find().sort('items', sort_dir).skip(page-1).limit(page_size)))

		summary = {
			'today_products': 0,
			'today_items': 0,
			'today_price': 0,
			'month_products': 0,
			'month_items': 0,
			'month_price': 0,			
			'year_products': 0,
			'year_items': 0,
			'year_price': 0
		}

		for product in products:
			today = date.today()
			month, year = date.fromisoformat(product['date']).month, date.fromisoformat(product['date']).year
			items, price = int(product['items']), int(product['product_price'])

			if today == date.fromisoformat(product['date']):
				summary['today_products'] += 1
				summary['today_items'] += items
				summary['today_price'] += items * price

			if today.month == month and today.year == year:
				summary['month_products'] += 1
				summary['month_items'] += items
				summary['month_price'] += items * price

			if today.year == year:
				summary['year_products'] += 1
				summary['year_items'] += items
				summary['year_price'] += items * price

		return Response({'products': products, 'summary': summary, 'pages': pages}, status=status.HTTP_202_ACCEPTED)
		
	def post(self, request, format=None):
		data = request.data
		instance = collection.find_one({'_id': data['_id']})
		if instance:
			data['items'] += instance['items']
			collection.update_one({'_id': data['_id']}, {'$set': data})
		else:
			collection.insert_one(data)
		return Response(status=status.HTTP_201_CREATED)