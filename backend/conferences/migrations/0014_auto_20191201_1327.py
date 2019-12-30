# Generated by Django 2.2.7 on 2019-12-01 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('conferences', '0013_conference_pretix_event_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='conference',
            name='pretix_event_id',
            field=models.CharField(blank=True, default='', max_length=200, verbose_name='pretix event id'),
        ),
        migrations.AddField(
            model_name='conference',
            name='pretix_organizer_id',
            field=models.CharField(blank=True, default='', max_length=200, verbose_name='pretix organizer id'),
        ),
    ]