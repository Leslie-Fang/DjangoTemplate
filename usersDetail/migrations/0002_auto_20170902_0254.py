# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-09-02 02:54
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usersDetail', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='historydata',
            old_name='time',
            new_name='date',
        ),
    ]
