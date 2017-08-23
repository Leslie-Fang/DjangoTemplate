# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

#class is the table name
class DjangoUser(models.Model):
    name = models.CharField(max_length=20)
    password = models.CharField(max_length=200)