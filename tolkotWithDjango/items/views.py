from django.shortcuts import render
from .models import Items

def items(request):
    shoes = Items.objects.all().order_by('-price')
    return render(request,
        'items/index.html',
        {'shoes' : shoes}
    )
def contact(request):
    return render(request,
        'items/contact.html',
    )  
def size(request):
    return render(request,
        'items/size.html',
    )   
def cum(request):
    return render(request,
        'items/cum.html',
    ) 
    
def information(request):
    return render(request,
        'items/information.html',
    ) 
# Create your views here.
