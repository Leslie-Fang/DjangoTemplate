# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.http import HttpResponse
from django.template import loader
import django.contrib.staticfiles

from models import DjangoUser

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def main(request):
    #template = loader.get_template('polls/main.html')
    context = {}
    #return HttpResponse(template.render(context, request))
    #return HttpResponse('Heelo ')
    #return render(request,template,context)
    return render(request,'login/main.html',context)

def createUser(request):
    #newUser = DjangoUser(name='leslie',password='123456')
    newUser = DjangoUser(name='bob', password='654321')
    newUser.save()
    return HttpResponse("<p>save New user success!</p>")

def getUsers(request):
    context = {}
    list = DjangoUser.objects.all()
    if list.__len__() != 0:
        userlist=[]
        for item in list:
            userlist.append({'name':item.name,'password':item.password})
        context['userlist'] = userlist
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

    return render(request,'login/users.html',context)