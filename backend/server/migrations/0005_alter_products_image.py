# Generated by Django 5.0.7 on 2024-08-19 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0004_alter_user_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.ImageField(blank=True, default='default.png', upload_to='images'),
        ),
    ]
