# Generated by Django 2.2 on 2020-08-25 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0003_auto_20200821_1401'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactpost',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='image/'),
        ),
    ]
