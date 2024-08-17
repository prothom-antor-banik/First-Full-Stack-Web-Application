from django.http import Http404
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

from django.db.models import Q
from ..models import Products
from ..serializers import ProductSerializer

class ProductList(APIView):
	def get(self, request, format=None):
		try:
			search = request.query_params['search']
			products = Products.objects.filter(Q(name__contains=search) | Q(description__contains=search) | Q(brand__contains=search)) 
			serializer = ProductSerializer(products, many=True) 
			return Response(serializer.data)
		except:
			products = Products.objects.all() 
			serializer = ProductSerializer(products, many=True) 
			return Response(serializer.data)

	def post(self, request, format=None): 
		serializer = ProductSerializer(data=request.data)
		if serializer.is_valid(): 
			serializer.save()
			return Response(serializer.data, 
							status=status.HTTP_201_CREATED) 
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class ProductDetail(APIView):
	parser_classes = [MultiPartParser, FormParser]

	def get_product(self, pk):
		try: 
			return Products.objects.get(Id=pk)
		except Products.DoesNotExist: 
			raise Http404

	def get(self, request, pk, format=None): 
		product = self.get_product(pk)
		serializer = ProductSerializer(product)
		return Response(serializer.data) 

	def put(self, request, pk, format=None):
		product = self.get_product(pk)
		serializer = ProductSerializer(product, data=request.data) 
		if serializer.is_valid():
			serializer.save() 
			return Response(serializer.data) 
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

	def patch(self, request, pk, format=None):
		product = self.get_product(pk) 
		serializer = ProductSerializer(product, data=request.data, partial=True) 
		if serializer.is_valid(): 
			serializer.save()
			return Response(serializer.data) 
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
		

	def delete(self, request, pk, format=None): 
		product = self.get_product(pk)
		product.delete()
		products = Products.objects.all()
		serializer = ProductSerializer(products, many=True)
		return Response(serializer.data) 

