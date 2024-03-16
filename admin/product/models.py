from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Product(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=256, unique=True)
  created = models.DateField("Created Date", auto_now_add=True)
  sku = models.CharField(max_length=128, unique=True, blank=False, null=False)
  type = models.CharField(max_length=128, default="single")
  price = models.FloatField(
        verbose_name='Product Price',
        help_text='Enter the price of the product.',
        blank=True,
        null=True,
    )
  description = models.TextField(blank=True)
  short_description = models.TextField(blank=True)
  category = ArrayField(models.CharField(max_length=100), default=[0], blank=True)

  def __str__(self):
      return self.name
  
class Category(models.Model):
   category_id = models.AutoField(primary_key=True)
   parant_id = models.IntegerField(null=False)
   category_name = models.CharField(max_length=180, unique = True)

   def __str__(self):
      return self.category_name