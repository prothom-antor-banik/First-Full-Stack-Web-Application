from django.http import Http404
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework import status 

from django.db.models import Q
from ..models import User
from ..serializers import UserSerializer

class UserList(APIView):
	def get(self, request, format=None):
		try:
			search = request.query_params['search']
			users = User.objects.filter(Q(name__contains=search) | Q(email__contains=search)) 
			serializer = UserSerializer(users, many=True) 
			return Response(serializer.data)
		except:
			users = User.objects.all() 
			serializer = UserSerializer(users, many=True) 
			return Response(serializer.data)

	def post(self, request, format=None): 
		serializer = UserSerializer(data=request.data)
		if serializer.is_valid(): 
			serializer.save() 
			return Response(serializer.data, 
							status=status.HTTP_201_CREATED) 
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class UserDetail(APIView):
	def get_user(self, pk):
		try: 
			return User.objects.get(Id=pk)
		except User.DoesNotExist: 
			raise Http404

	def get(self, request, pk, format=None): 
		user = self.get_user(pk)
		serializer = UserSerializer(user) 
		return Response(serializer.data)

	def patch(self, request, pk, format=None): 
		user = self.get_user(pk) 
		serializer = UserSerializer(user, data=request.data, partial=True) 
		if serializer.is_valid(): 
			serializer.save()
			return Response(serializer.data) 
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

	def delete(self, request, pk, format=None): 
		user = self.get_user(pk)
		user.delete()
		users = User.objects.all()
		serializer = UserSerializer(users, many=True)
		return Response(serializer.data)