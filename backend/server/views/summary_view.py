from django.core.paginator import Paginator
from django.http import Http404
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
import pymongo
from ..credentials import connection_string
from bson.json_util import loads, dumps

db = pymongo.MongoClient(connection_string)["MyMongoDB"]
collection = db["summary"]

class Summary(APIView):
	def get(self, request, format=None):
		page_size = 10
		page = int(request.query_params['page'])
		pages = 1 + collection.count_documents({}) // page_size
		sort = request.query_params['sort']
		sort_dir = pymongo.ASCENDING if sort == 'ASC' else pymongo.DESCENDING
		products = collection.find().sort("items", sort_dir).skip(page-1).limit(page_size)
		return Response({'products': loads(dumps(products)), 'pages': pages}, status=status.HTTP_202_ACCEPTED)
		
	def post(self, request, format=None):
	    data = request.data
	    collection.insert_one(data)
	    return Response(status=status.HTTP_201_CREATED)