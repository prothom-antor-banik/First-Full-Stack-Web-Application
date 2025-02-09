from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from .models import User, Products, Orders, Cart, Orders_Products_Relationship

class UserSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = User
        fields = "__all__"

    def create(self, validated_data):
        password = validated_data["password"]
        validated_data["password"] = make_password(password)
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        super().update(instance=instance, validated_data=validated_data)
        instance.save()
        return instance
    

class ProductSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Products
        fields = "__all__"


class OrderUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ("Id", "name", "email", "division", "city", "street", "apartment")


class OrdersProductsRelationshipSerializer(serializers.ModelSerializer):
    Id = serializers.IntegerField(source="product.Id", read_only=True)
    name = serializers.CharField(source="product.name", read_only=True)
    description = serializers.CharField(source="product.description", read_only=True)
    image = serializers.ImageField(source="product.image", read_only=True)
    price = serializers.FloatField(source="product.price", read_only=True)

    class Meta:
        model = Orders_Products_Relationship
        fields = ("Id", "name", "description", "image" , "price", "items")


class OrderSerializer(serializers.ModelSerializer):
    user = OrderUserSerializer(read_only=True)
    product_list = OrdersProductsRelationshipSerializer(source="orders_products_relationship_set", many=True, read_only=True)

    class Meta:
        model = Orders
        fields = "__all__"
    
    def create(self, validated_data):
        product_list = validated_data["product_list"]
        user_instance = User.objects.get(Id=validated_data["userId"])
        validated_data["user"] = user_instance
        validated_data.pop("product_list")
        order_instance = Orders.objects.create(**validated_data)
        for product in product_list:
            order_instance.product_list.add(Products.objects.get(Id=product[0]), through_defaults={"items": product[1]})
        return order_instance
    
    def update(self, instance, validated_data):
        super().update(instance=instance, validated_data=validated_data)
        instance.save()
        return instance
    

class OrderDeliverySerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source="user.name", read_only=True)
    user_division = serializers.CharField(source="user.division", read_only=True)
    user_city = serializers.CharField(source="user.city", read_only=True)
    user_street = serializers.CharField(source="user.street", read_only=True)
    user_apartment = serializers.CharField(source="user.apartment", read_only=True)

    class Meta:
        model = Orders
        fields = ("Id", "products", "price", "user_name", "user_division", "user_city", "user_street", "user_apartment")


class CartProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        fields = ("name", "image", "price", "countInStock", "rating")


class CartSerializer(serializers.ModelSerializer):
    product = CartProductSerializer(read_only=True)

    class Meta:
        model = Cart
        fields = "__all__"

    def create(self, validated_data):
        product_instance = Products.objects.get(Id=validated_data["productId"])
        validated_data["product"] = product_instance
        cart_instance = Cart.objects.create(**validated_data)
        return cart_instance