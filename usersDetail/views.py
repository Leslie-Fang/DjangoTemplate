# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from DjangoTemplate.myRedis import myRedisClient
from login.models import DjangoUser
from django.http import HttpResponse
import datetime
import time
import random
from .models import HistoryData
from database_API import getHistoryData
import json

def testUsers(request):
    context = {}
    return render(request, 'usersDetail/test.html', context)
# Create your views here.
def getUsers(request):
    context = {}
    list = DjangoUser.objects.all()
    if list.__len__() != 0:
        userlist=[]
        for item in list:
            userlist.append({'name':item.name,'password':item.password})
        context['userlist'] = userlist
        context['userNumber'] = myRedisClient.get('userNumber')
        print(context)
    else:
        print('No user')
    '''
        try:
            user2 = DjangoUser.objects.filter(name='leslie')
            user3 = DjangoUser.objects.get(name='hello')
        except:
            print("user not exsits")
            return render(request,'login/users.html',context)
        print("=================>")
        print(user2)
        print(user3)
        for var in list:
            print(var.name)
        user3.name = 'bob'
        user3.save()
    '''
    #print("======test session=======>")
    #print(request.session['user'])
    return render(request,'usersDetail/users.html',context)

def showUserHabbit(request):
    context = {}
    return render(request, 'usersDetail/figure.html', context)

def createFakeHistoryTradeData(request):
    year = ["16"]
    month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    day = range(1, 31)
    basePrice = 0.8
    startTime = datetime.datetime.now()
    for itemY in year:
        for itemM in month:
            for itemD in day:
                price = basePrice + random.random()*0.1 + (datetime.datetime.now() - startTime).seconds*0.01
                #tradeEvent = {'date': str(str(itemD) + "-" + itemM + "-" + itemY), "MarketCurrency": "LTC", "BaseCurrency": "BTC", "price": price}
                # print(collection.find_one())
                newHistoryData = HistoryData(name='BTC/TCL', price=price,date=str(str(itemD) + "-" + itemM + "-" + itemY))
                newHistoryData.save()
                time.sleep(1)
    return_data = "ok"
    bytes = return_data.encode('utf-8')
    return HttpResponse(bytes, content_type='application/json')

def getData(request):
    data = getHistoryData()
    #write data 2 csv
    # with open('./static/data2.tsv',"w+") as f:
    #     f.write("date\tprice\n")
    #     data = json.loads(ret)
    #     print(data)
    #     for i in range(1,350):
    #         print i
    #         print(data[str(i)])
    #         cData = data[str(i)]
    #         print(cData["price"])
    #         f.write(cData["date"]+"\t"+str(cData["price"])+"\t\n")
    ret = json.dumps(data)
    bytes = ret.encode('utf-8')
    return HttpResponse(bytes, content_type='application/json')