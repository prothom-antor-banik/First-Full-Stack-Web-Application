# Generated by Django 5.0.7 on 2024-08-19 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0003_alter_cart_items'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
