from rest_framework import serializers
from .models import User, Products, Orders, Cart

class UserSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = User
        fields = ("Id", "name", "email", "address", "password", "is_admin")


class ProductSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Products
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Orders
        fields = "__all__"


class CartProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        fields = ('name', 'image', 'price', 'countInStock')


class CartSerializer(serializers.ModelSerializer):
    product = CartProductSerializer(read_only=True)

    class Meta:
        model = Cart
        fields = "__all__"

    def create(self, validated_data):
        product = validated_data.pop('product')
        product_instance = Products.objects.get(Id=validated_data['productId'])
        validated_data['product'] = product_instance
        cart_instance = Cart.objects.create(**validated_data)
        return cart_instance
