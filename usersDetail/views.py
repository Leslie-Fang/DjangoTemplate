# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from DjangoTemplate.myRedis import myRedisClient
from login.models import DjangoUser

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