# Generated by Django 2.2.8 on 2020-02-07 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0012_auto_20200206_0537'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scheduleitem',
            name='slug',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='slug'),
        ),
    ]
