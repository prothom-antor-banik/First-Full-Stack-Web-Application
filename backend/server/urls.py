from django.urls import path 
from rest_framework.urlpatterns import format_suffix_patterns
from .views import index_view, login_view, user_view, product_view, order_view, cart_view, summary_view, comment_view

urlpatterns = [
    path('', index_view.index, name='index'),
    path('login/', login_view.Login.as_view()),
	path('users/<int:pk>/', user_view.UserDetail.as_view()),
	path('users/', user_view.UserList.as_view()),
	path('products/<int:pk>/', product_view.ProductDetail.as_view()),
    path('product-update/<int:pk>/', product_view.ProductUpdate.as_view()),
    path('products/', product_view.ProductList.as_view()),
	path('orders/pending/<int:pk>/', order_view.OrderPending.as_view()),
	path('orders/<int:pk>/', order_view.OrderDetail.as_view()),
    path('orders/', order_view.OrderList.as_view()),
    path('delivery/<int:pk>/', order_view.OrderDeliveryDetails.as_view()),
    path('delivery/', order_view.OrderDeliveryList.as_view()),
	path('cart/<int:pk>/', cart_view.CartDetail.as_view()),
    path('cart/', cart_view.CartList.as_view()),
    path('cart-delete/<int:pk>/', cart_view.CartDelete.as_view()),
    path('summary/', summary_view.Summary.as_view()),
    path('comment/<int:pk>/',  comment_view.Comment.as_view()),
] 

urlpatterns = format_suffix_patterns(urlpatterns)

