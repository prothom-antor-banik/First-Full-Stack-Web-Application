# Generated by Django 5.0.7 on 2024-08-17 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_alter_user_address_alter_user_email_alter_user_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='items',
            field=models.IntegerField(default=1),
        ),
    ]
