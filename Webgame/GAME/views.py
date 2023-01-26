from django.shortcuts import render
from django.http import HttpResponse

def dashboard(request):
    return render(request,'dashboard.htm')

def game(request):
    return render(request,'game.htm')    

