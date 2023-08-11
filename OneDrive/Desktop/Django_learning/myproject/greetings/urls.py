from django.urls import path
from . import views
urlpatterns = [
    path('',views.welcome,name='welcome'),
    path('greet/<str:username>/',views.greet_user, name='greet_user'),
    path('goodbye/<str:username>/',views.farewell_user, name='farewell_user')
]