# Generated by Django 2.2.8 on 2019-12-31 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('conferences', '0016_delete_ticketfare'),
    ]

    operations = [
        migrations.AddField(
            model_name='conference',
            name='pretix_hotel_checkin_question_id',
            field=models.IntegerField(blank=True, null=True, verbose_name='pretix hotel check-in question id'),
        ),
        migrations.AddField(
            model_name='conference',
            name='pretix_hotel_checkout_question_id',
            field=models.IntegerField(blank=True, null=True, verbose_name='pretix hotel checkout question id'),
        ),
        migrations.AddField(
            model_name='conference',
            name='pretix_hotel_room_type_question_id',
            field=models.IntegerField(blank=True, null=True, verbose_name='pretix hotel room type question id'),
        ),
        migrations.AddField(
            model_name='conference',
            name='pretix_hotel_ticket_id',
            field=models.IntegerField(blank=True, null=True, verbose_name='pretix hotel ticket id'),
        ),
    ]
