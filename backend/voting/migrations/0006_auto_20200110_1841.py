# Generated by Django 2.2.8 on 2020-01-10 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voting', '0005_auto_20190717_0703'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vote',
            name='value',
            field=models.IntegerField(choices=[(1, 'Not Interested'), (2, 'Maybe'), (3, 'Want to See'), (4, 'Must See'), (5, 'Love it')], verbose_name='vote'),
        ),
    ]
