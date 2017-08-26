from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

from usersDetail import views

urlpatterns = [
    url(r'^$', views.getUsers, name='getUsers'),
]