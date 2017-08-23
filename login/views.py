# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.http import HttpResponseRedirect,HttpResponse
from django.template import loader
import django.contrib.staticfiles
from django.urls import reverse
from models import DjangoUser
from myRedis import myRedisClient
import bcrypt as bcrypt

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
    newUser = DjangoUser(name='leslie',password='123456')
    #newUser = DjangoUser(name='bob', password='654321')
    newUser.save()
    myRedisClient.incr('userNumber')
    return HttpResponse("<p>save New user success!</p>")

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
    return render(request,'login/users.html',context)

def signup(request):
    if request.method == 'GET':
        context = {}
        return render(request, 'login/signup.html', context)
    elif request.method == 'POST':
        print(request.POST['username'])
        print(request.POST['password'])
        try:
            saltPassword = bcrypt.hashpw(request.POST['password'], bcrypt.gensalt())
            newUser = DjangoUser(name=request.POST['username'], password=saltPassword)
            newUser.save()
            myRedisClient.incr('userNumber')
            return HttpResponseRedirect('/login/')
        except:
            print('Save user error!')
            return HttpResponseRedirect('/login/signup')


def login(request):
    if request.method == 'GET':
        context = {}
        return render(request, 'login/login.html', context)
    elif request.method == 'POST':
        try:
            user = DjangoUser.objects.get(name=request.POST['username'])
        except:
            print('user not exsits!')
            return HttpResponseRedirect('/login/signup/')
        print(user.password)
        print(bcrypt.checkpw(request.POST['password'].strip(), user.password))
        if bcrypt.checkpw(request.POST['password'], user.password):
            print("============>")
            print(user)
            print(user.password)
        else:
            print('passwrod wrong!')
            return HttpResponseRedirect('/login/')
        #try:
            #user = DjangoUser.objects.get(name=request.POST['username'],password=request.POST['password'])
            #print("============>")
            #print(user)
            #print(user.password)
        #except:
            #print('passwrod wrong!')
            #return HttpResponseRedirect('/login/')
        request.session['user'] = request.POST['username']
        request.session['islogin'] = 1
        request.session.set_expiry(3600)#3600 seconds / 60 minutes
        return HttpResponseRedirect('/login/getUser/')

def logout(request):
    request.session.flush()
    return HttpResponseRedirect('/login/')