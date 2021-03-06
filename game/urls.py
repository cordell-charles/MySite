"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib.auth import views as auth_views
from django.urls import include, path, re_path
from .views import hangman_retrieve_view, rps_retrieve_view, snake_retrieve_view, game_list_view


urlpatterns = [
	path('', game_list_view, name='games'),
    path('hangman/', hangman_retrieve_view),
    path('r-p-s/', rps_retrieve_view),
    path('snake/', snake_retrieve_view),
]
