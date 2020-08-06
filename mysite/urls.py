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
from django.contrib import admin
from django.conf import settings
from django.conf.urls import url
from django.contrib.auth import views as auth_views
from django.urls import include, path, re_path
from .views import home_page_view, about_page_view, connect_page_view, profile_view


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_page_view, name= 'home'),
    path('connect/', connect_page_view, name='connect'),
    path('about/', about_page_view, name= 'about'),
    path('my-profile/', profile_view, name='my-profile'),
    path('app/', include('game.urls'))
]


if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.STATIC_URL, document_root= settings.STATIC_ROOT)