from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin

from .manager import UserManager

class User(AbstractBaseUser, PermissionsMixin):
    Id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=150, unique=True)
    address = models.CharField(max_length=50)
    password = models.CharField(max_length=1024)

    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'address']
    
    objects = UserManager()

    class Meta:
        verbose_name = "User"
    
    def __str__(self):
        return f"{str(self.Id)} {self.name} {self.email}"
    
    
class Products(models.Model):
    Id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=256, blank=False)
    description = models.CharField(max_length=1024, blank=False)
    image = models.ImageField(upload_to='images/', blank=True, default='default.png')
    brand = models.CharField(max_length=128, blank=False)
    category = models.CharField(max_length=128, blank=False)
    price = models.FloatField(blank=False)
    countInStock = models.SmallIntegerField(blank=False, default=0)
    rating = models.FloatField(blank=False, default=0.0)

    class Meta:
        verbose_name = "Product"

    def __str__(self):
        return f"{str(self.Id)} {self.name}"
    
    
class Orders(models.Model):
    Id = models.AutoField(primary_key=True)
    userId = models.IntegerField(blank=False)
    products = models.IntegerField(blank=False, default=0)
    items = models.IntegerField(blank=False, default=0)
    price = models.FloatField(blank=False, default=0.0)
    date = models.DateField(auto_now_add=True)
    method = models.CharField(max_length=64, blank=False)

    class Meta:
        verbose_name = "Order"

    def __str__(self):
        return f"{str(self.Id)} {str(self.userId)}"
    
    
class Cart(models.Model):
    Id = models.AutoField(primary_key=True)
    userId = models.IntegerField(blank=False)
    productId = models.IntegerField(blank=False)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    items = models.IntegerField(blank=False, default=1)

    class Meta:
        verbose_name = "Cart"
        unique_together = (('userId', 'productId'),)

    def __str__(self):
        return f"{str(self.Id)} {str(self.userId)} {str(self.productId)}"