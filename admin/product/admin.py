from django.contrib import admin
from .models import Product, Category

class ProductAdmin(admin.ModelAdmin):
  fields = ('name', 'type', 'sku', 'category', 'price', 'description', 'short_description')
  # fieldsets = [
  #     (None, {"fields": ["name"]}),
  #     ("Product Data", {"fields": ["type"]}),
  # ]
  list_display=('name', 'id', 'type', 'sku', 'price', 'created')
  # list_filter = ["id"]
  search_fields = ["name"]

admin.site.register(Product, ProductAdmin)  

class CategoryAdmin(admin.ModelAdmin):
  fields = ('parant_id', 'category_name')
  list_display = ('category_name', 'category_id', 'parant_id')
  search_fields = ['category_name']

admin.site.register(Category, CategoryAdmin)