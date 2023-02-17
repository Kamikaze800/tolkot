from django.db import models

class Items(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField('name', max_length=120)
    price = models.IntegerField('price')
    img = models.ImageField('img', upload_to='users/', null=True, blank=True)
    season = models.TextField('сезон', null=True, blank=True)
    upperMaterial = models.TextField('Метериал верха', null=True, blank=True)
    linigMaterial = models.TextField('Материал подкладки', null=True, blank=True)
    color = models.TextField('цвет', null=True, blank=True)

    def __str__(self):
        return self.name   

# Create your models here.
