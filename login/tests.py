# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from .models import DjangoUser

# Create your tests here.

# how to run
# python manage.py test login
class UserLoginTest(TestCase):
    def test_to_get_ligin_page(self):
        response = self.client.get('/login/')
        self.assertEqual(response.status_code, 200)

    #def test_to_login(self):
     #   response = self.client.get('/login/')
     #   self.assertEqual(response.status_code, 200)
