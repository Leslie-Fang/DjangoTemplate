# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.http import HttpResponse
from django.template import loader
import django.contrib.staticfiles

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def main(request):
    #template = loader.get_template('polls/main.html')
    context = {}
    #return HttpResponse(template.render(context, request))
    #return HttpResponse('Heelo ')
    #return render(request,template,context)
    return render(request,'login/main.html',context)

