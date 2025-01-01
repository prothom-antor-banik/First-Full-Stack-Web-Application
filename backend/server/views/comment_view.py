from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
import pymongo
from bson.json_util import loads, dumps

from ..configure import connectionString

client = pymongo.MongoClient(connectionString, connectTimeoutMS=15000, socketTimeoutMS=None, connect=False, maxPoolsize=1)
db = client['MyMongoDB']
collection = db['comment']

class Comment(APIView):
	def get(self, request, pk, format=None):
		page_size = 5
		page = int(request.query_params['page'])
		pages = 1 if collection.count_documents({}) % page_size else 0  + collection.count_documents({}) // page_size
		comments = loads(dumps(collection.find({"productId": pk}).skip(page-1).limit(page_size)))

		return Response({'comments': comments, 'pages': pages}, status=status.HTTP_202_ACCEPTED)
		
	def post(self, request, pk, format=None):
		data = request.data
		data['userId'] = int(data['userId'])
		data['productId'] = int(data['productId'])
		collection.insert_one(data)
		return Response(status=status.HTTP_201_CREATED)
	
	def delete(self, request, pk, format=None):
		try:
			collection.delete_one({"_id": str(pk)})
			return Response(status=status.HTTP_200_OK)
		except:
			return Response(status=status.HTTP_400_BAD_REQUEST)