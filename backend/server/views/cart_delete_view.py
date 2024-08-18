from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework import status 

from ..models import Cart

class CartDelete(APIView):
    def delete(self, request, pk, format=None):
        try:
            Cart.objects.filter(userId=pk).delete()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)