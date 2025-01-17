from django.core.paginator import Paginator
from django.http import Http404
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework import status 

from ..models import Orders
from ..serializers import OrderSerializer, OrderDeliverySerializer

class OrderList(APIView):
	def get(self, request, format=None): 
		page_size = 10
		page = request.query_params['page']
		pending = True if request.query_params['pending'] == 'true' else False
		show_delivery = True if request.query_params['show_delivery'] == 'true' else False
		orders = Orders.objects.get_queryset().filter(pending=pending, show_delivery=show_delivery).order_by('Id')
		paginator = Paginator(orders, page_size)
		try:
			orders = paginator.page(page)
		except:
			Response(status=status.HTTP_400_BAD_REQUEST)
		serializer = OrderSerializer(orders, many=True) 
		return Response({'orders': serializer.data, 'pages': paginator.num_pages})

	def post(self, request, format=None):
		serializer = OrderSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save(product_list=request.data["product_list"])
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
		try:
			page_size = 12
			page = request.query_params['page']
			orders = Orders.objects.filter(userId=pk).order_by('Id')
			paginator = Paginator(orders, page_size)
			try:
				orders = paginator.page(page)
			except:
				Response(status=status.HTTP_400_BAD_REQUEST)
			serializer = OrderSerializer(orders, many=True)
			return Response({'orders': serializer.data, 'pages': paginator.num_pages}) 
		except:
			return Response(status=status.HTTP_202_ACCEPTED)

	def patch(self, request, pk, format=None):
		order = self.get_order(pk)
		serializer = OrderSerializer(order, data=request.data, partial=True) 
		if serializer.is_valid():
			serializer.save()
			return Response(status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

	def delete(self, request, pk, format=None): 
		order = self.get_order(pk)
		order.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)
	

class OrderPending(APIView):
	def get_order(self, pk):
		try: 
			return Orders.objects.get(Id=pk)
		except Orders.DoesNotExist: 
			raise Http404

	def get(self, request, pk, format=None):
		order = self.get_order(pk)
		serializer = OrderSerializer(order)
		return Response(serializer.data)
	
	def patch(self, request, pk, format=None):
		order = self.get_order(pk) 
		serializer = OrderSerializer(order, data=request.data, partial=True) 
		if serializer.is_valid(): 
			serializer.save()
			return Response(status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	
	def delete(self, request, pk, format=None): 
		order = self.get_order(pk)
		order.delete()
		return Response(status=status.HTTP_200_OK)
	
	
class OrderDeliveryList(APIView):
	def get(self, request, format=None): 
		page_size = 12
		page = request.query_params['page']
		city = request.query_params['city']
		street = request.query_params['street']
		orders = Orders.objects.get_queryset().filter(show_delivery=True, user__city=city, user__street=street, rider=None).order_by('Id')
		paginator = Paginator(orders, page_size)
		try:
			orders = paginator.page(page)
		except:
			Response(status=status.HTTP_400_BAD_REQUEST)
		serializer = OrderDeliverySerializer(orders, many=True)
		return Response({'deliveries': serializer.data, 'pages': paginator.num_pages})


class OrderDeliveryDetails(APIView):
	def get_order(self, pk):
		try: 
			return Orders.objects.get(Id=pk)
		except Orders.DoesNotExist:
			raise Http404
		
	def get(self, request, pk, format=None):
		try:
			orders = Orders.objects.get_queryset().filter(rider__Id=pk, show_delivery=True).order_by('Id')
			serializer = OrderDeliverySerializer(orders, many=True)
			return Response(data=serializer.data, status=status.HTTP_200_OK)
		except:
			return Response(status=status.HTTP_400_BAD_REQUEST)
		
	def patch(self, request, pk, format=None):
		order = self.get_order(pk)
		serializer = OrderSerializer(order, data=request.data, partial=True) 
		if serializer.is_valid():
			serializer.save()
			return Response(status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)