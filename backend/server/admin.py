from django.contrib import admin

from .models import User, Products, Orders, Cart, Orders_Products_Relationship

admin.site.register(User)
admin.site.register(Products)
admin.site.register(Orders)
admin.site.register(Cart)
admin.site.register(Orders_Products_Relationship)