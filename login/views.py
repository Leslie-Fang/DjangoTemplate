# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import bcrypt as bcrypt
from django.http import HttpResponseRedirect,HttpResponse
from django.shortcuts import render

from DjangoTemplate.myRedis import myRedisClient
from models import DjangoUser
import json

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
            print('Save user success!')
            #if use the Django template
            #return HttpResponseRedirect('/login/')
            #if use reactjs
            return_data = "{state:ok}"
            bytes = return_data.encode('utf-8')
            return HttpResponse(bytes, content_type='application/json')
        except:
            print('Save user error!')
            # if use the Django template
            #return HttpResponseRedirect('/login/signup')
            #if use reactjs
            return_data = "{state:saveError}"
            bytes = return_data.encode('utf-8')
            return HttpResponse(bytes, content_type='application/json')


def login(request):
    if request.method == 'GET':
        context = {}
        #if user login, would get the islogin in the session
        try:
            if request.session['islogin'] == 1:
                print(request.session['islogin'])
                context['islogin'] = 'islogin'
                context['user'] = request.session['user']
                return render(request, 'login/login.html', context)
        except KeyError:
            #KeyError: if the request.session['islogin'] is not define
            return render(request, 'login/login.html', context)
    elif request.method == 'POST':
        print(request.POST['username'])
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
        return HttpResponseRedirect('/users/')

def logout(request):
    request.session.flush()
    return HttpResponseRedirect('/login/')

def react_signup(request):
    context = {}
    return render(request, 'login/signup_react.html', context)