from django.http import Http404
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework import status 

from ..models import Orders
from ..serializers import OrderSerializer 

class OrderList(APIView):
	def get(self, request, format=None): 
		orders = Orders.objects.all()
		serializer = OrderSerializer(orders, many=True) 
		return Response(serializer.data)

	def post(self, request, format=None): 
		serializer = OrderSerializer(data=request.data)
		if serializer.is_valid(): 
			serializer.save()
			return Response(serializer.data, 
							status=status.HTTP_201_CREATED) 
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class OrderDetail(APIView):
	def get_order(self, pk):
		try: 
			return Orders.objects.get(Id=pk) 
		except Orders.DoesNotExist: 
			raise Http404

	def get(self, request, pk, format=None):
		orders = Orders.objects.filter(userId=pk)
		serializer = OrderSerializer(orders, many=True)
		return Response(serializer.data) 

	def patch(self, request, pk, format=None):
		order = self.get_order(pk) 
		serializer = OrderSerializer(order, data=request.data, partial=True) 
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data) 
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
		

	def delete(self, request, pk, format=None): 
		order = self.get_order(pk)
		order.delete()
		return Response(status=status.HTTP_204_NO_CONTENT) 

