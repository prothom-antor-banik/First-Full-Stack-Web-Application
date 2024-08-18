from django.http import Http404
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework import status 

from ..models import Cart
from ..serializers import CartSerializer

class CartList(APIView):
	def get(self, request, format=None):
		cart_objects = Cart.objects.all()
		serializer = CartSerializer(cart_objects, many=True) 
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = CartSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save(product=request.data['product'])
			return Response(serializer.data, 
							status=status.HTTP_201_CREATED)
		try: 
			Cart.objects.get(userId=request.data['userId'], productId=request.data['productId'])
			return Response(status=status.HTTP_200_OK)
		except Cart.DoesNotExist:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class CartDetail(APIView):
	def get_cart(self, pk):
		try:
			return Cart.objects.get(Id=pk)
		except Cart.DoesNotExist: 
			raise Http404

	def get(self, request, pk, format=None):
		cart_objects = Cart.objects.filter(userId=pk)
		serializer = CartSerializer(cart_objects, many=True)
		return Response(serializer.data)

	def patch(self, request, pk, format=None):
		cart_object = self.get_cart(pk) 
		serializer = CartSerializer(cart_object, data=request.data, partial=True) 
		if serializer.is_valid():
			serializer.save()
			cart_objects = Cart.objects.all()
			serializer = CartSerializer(cart_objects, many=True)
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

	def delete(self, request, pk, format=None):
		cart_object = self.get_cart(pk)
		cart_object.delete()
		cart_objects = Cart.objects.all()
		serializer = CartSerializer(cart_objects, many=True)
		return Response(serializer.data)

class CartDelete(APIView):
    def delete(self, request, pk, format=None):
        try:
            Cart.objects.filter(userId=pk).delete()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)
