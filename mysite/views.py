from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render
from .models import ContactPost
from .forms import ContactPostForm


# Create your views here.
def home_page_view(request):
	return render(request, "home.html")


def contact_list_and_create_view(request):
	template_name = 'contact.html'

	# form for adding comments
	form = ContactPostForm(request.POST or None, request.FILES or None)
	if form.is_valid():
		title = form.cleaned_data['title']
		content = form.cleaned_data['content']
		name = form.cleaned_data['name']
		obj = ContactPost.objects.create(title=title, content=content, name=name)
		obj.save()
		return HttpResponseRedirect(reverse('contact'))

	objects = ContactPost.objects.all()
	return render(request, template_name, { 'objects':objects, 'form':form})


def profile_view(request):
	return render(request, "profile.html")

