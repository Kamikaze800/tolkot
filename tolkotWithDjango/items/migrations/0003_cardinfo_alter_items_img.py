# Generated by Django 4.1.4 on 2023-01-03 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0002_items_img_alter_items_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='CardInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('season', models.TextField(verbose_name='сезон')),
                ('upperMaterial', models.TextField(verbose_name='Метериал верха')),
                ('linigMaterial', models.TextField(verbose_name='Материал подкладки')),
                ('color', models.TextField(verbose_name='цвет')),
            ],
        ),
        migrations.AlterField(
            model_name='items',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='users/', verbose_name='img'),
        ),
    ]
