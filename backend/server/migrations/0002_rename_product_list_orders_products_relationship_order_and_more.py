# Generated by Django 5.0.7 on 2025-01-02 11:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orders_products_relationship',
            old_name='product_list',
            new_name='order',
        ),
        migrations.RenameField(
            model_name='orders_products_relationship',
            old_name='product_id',
            new_name='product',
        ),
    ]