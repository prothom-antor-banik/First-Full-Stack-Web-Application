from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT

from ..models import User
from ..serializers import UserSerializer

class Login(APIView):
    def post(self, request, format=None):
        email = request.data['email']
        password = request.data['password']
        try:
            user = User.objects.get(email=email, password=password)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response(status=HTTP_204_NO_CONTENT)