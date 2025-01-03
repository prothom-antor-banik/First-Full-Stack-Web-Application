from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from bson.json_util import loads, dumps
from datetime import date
import calendar
import pymongo

from ..configure import connectionString

client = pymongo.MongoClient(connectionString, connectTimeoutMS=15000, socketTimeoutMS=None, connect=False, maxPoolsize=1)
db = client['MyMongoDB']
collection = db['summary']

def getSummary(date_from:str, date_to:str)->dict:
	return (
    	collection.aggregate([
        {
          	"$match" : {
              	"date": {"$gte": date_from, "$lte": date_to}
          	}
        },
        {
          	"$group": {
            	"_id": "$*",
            	"total_products": {"$sum": 1},
            	"total_items": { "$sum": "$items" },
            	"total_price": {"$sum": {"$multiply": ["$items", "$product_price"]}}
          	}
        }
      	]).to_list()
  	)

class Summary(APIView):
	def get(self, request, format=None):
		page_size = 10
		page = int(request.query_params['page'])
		pages = collection.count_documents({}) // page_size + 1 if collection.count_documents({}) % page_size else 0
		sort = request.query_params['sort']
		sort_dir = pymongo.ASCENDING if sort == 'ASC' else pymongo.DESCENDING
		products = loads(dumps(collection.find().sort('items', sort_dir).skip(page-1).limit(page_size)))

		today = date.today()
		month = str(today.month).zfill(2)
		year = str(today.year)

		today_summary = getSummary(str(today), str(today))
		month_summary = getSummary(f"{year}-{month}-01", f"{year}-{month}-{calendar.monthrange(today.year, today.month)[1]}")
		year_summary = getSummary(f"{year}-01-01", f"{year}-12-31")

		summary = {
			'today_products': 0 if not today_summary else today_summary[0]['total_products'],
			'today_items': 0 if not today_summary else today_summary[0]['total_items'],
			'today_price': 0 if not today_summary else today_summary[0]['total_price'],
			'month_products': 0 if not month_summary else month_summary[0]['total_products'],
			'month_items': 0 if not month_summary else month_summary[0]['total_items'],
			'month_price': 0 if not month_summary else month_summary[0]['total_price'],			
			'year_products': 0 if not year_summary else year_summary[0]['total_products'],
			'year_items': 0 if not year_summary else year_summary[0]['total_items'],
			'year_price': 0 if not year_summary else year_summary[0]['total_price'],
		}

		return Response({'products': products, 'summary': summary, 'pages': pages}, status=status.HTTP_202_ACCEPTED)
		
	def post(self, request, format=None):
		data = request.data
		instance = collection.find_one({'_id': data['_id']})
		if instance:
			data['items'] = int(data['items']) + int(instance['items'])
			collection.update_one({'_id': data['_id']}, {'$set': data})
		else:
			collection.insert_one(data)
		return Response(status=status.HTTP_201_CREATED)