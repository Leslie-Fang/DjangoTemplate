# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class HistoryData(models.Model):
    name = models.CharField(max_length=20)
    price = models.CharField(max_length=50)
    date = models.CharField(max_length=50)
