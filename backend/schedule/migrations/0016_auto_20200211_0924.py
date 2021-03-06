# Generated by Django 2.2.8 on 2020-02-11 09:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0015_room_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='order',
            field=models.PositiveIntegerField(db_index=True, default=1, editable=False, verbose_name='order'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='scheduleitem',
            name='submission',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='schedule_items', to='submissions.Submission', verbose_name='submission'),
        ),
    ]
