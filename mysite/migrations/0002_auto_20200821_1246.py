# Generated by Django 2.2 on 2020-08-21 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactpost',
            name='name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
