from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create, name='create'),
    path('read/', views.read, name='read'),
    path('update/<int:user_id>/', views.update_user, name='update'),
    path('delete/<int:user_id>/', views.delete_user, name='delete_user'),

    # ... other paths ...
]
