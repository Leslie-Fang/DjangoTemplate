from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

from usersDetail import views

urlpatterns = [
    url(r'^$', views.getUsers, name='getUsers'),
    url(r'^test$', views.testUsers, name='testUsers'),
    url(r'^userhabbit$', views.showUserHabbit, name='showUserHabbit'),
    url(r'^createFakeData$', views.createFakeHistoryTradeData, name='createFakeData'),
    url(r'^getdata$', views.getData, name='getdata'),
    url(r'^showfigure2$', views.showfigure2, name='showfigure2'),
]