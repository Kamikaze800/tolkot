from django.urls import path, re_path
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('', views.items,),
    path('catalog', views.items,),
    path('contact', views.contact,),
    path('size', views.size,),
    path('cum', views.cum,),
    path('information', views.information,),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)