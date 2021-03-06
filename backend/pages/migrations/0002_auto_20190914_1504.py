# Generated by Django 2.2.5 on 2019-09-14 15:04

from django.db import migrations
import i18n.fields


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='page',
            options={},
        ),
        migrations.AlterField(
            model_name='page',
            name='content',
            field=i18n.fields.I18nTextField(verbose_name='content'),
        ),
        migrations.AlterField(
            model_name='page',
            name='slug',
            field=i18n.fields.I18nCharField(blank=True, max_length=200, verbose_name='slug'),
        ),
        migrations.AlterField(
            model_name='page',
            name='title',
            field=i18n.fields.I18nCharField(max_length=200, verbose_name='title'),
        ),
    ]
