from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

from login import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^main/', views.main, name='login_main'),
    url(r'^createUser/', views.createUser, name='login_createUser'),
    url(r'^getUser/', views.getUsers, name='login_getUser'),
]