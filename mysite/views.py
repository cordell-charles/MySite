from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render
from .models import ContactPost
from .forms import ContactPostForm


# Create your views here.
def home_page_view(request):
	return render(request, "home.html")


def connect_list_and_create_view(request):
	template_name = 'connect.html'

	# form for adding comments
	form = ContactPostForm(request.POST or None)
	if form.is_valid():
		title = form.cleaned_data['title']
		content = form.cleaned_data['content']
		name = form.cleaned_data['name']
		obj = ContactPost.objects.create(title=title, content=content, name=name)
		obj.save()
		return HttpResponseRedirect(reverse('connect'))

	objects = ContactPost.objects.all()
	return render(request, template_name, { 'objects':objects, 'form':form})


def profile_view(request):
	return render(request, "profile.html")




'''
class ArticleCreateView(LoginRequiredMixin, CreateView): # Class based create view
	# model = Article
	template_name = 'articles/article_create.html'
	form_class = ArticleForm
	queryset = Article.objects.all()
'''
'''
@login_required
def blog_post_create_view(request):
	# Create new blog objects 
	template_name = 'blog/create.html'
	form = BlogPostForm(request.POST or None, request.FILES or None)
	if form.is_valid():
		obj = form.save(commit= False)
		obj.user = request.user
		obj.save()
		form = BlogPostForm()
	context = {'form': form }
	return render(request, template_name, context)


@login_required
def blog_post_update_view(request, slug):
	template_name = 'blog/create.html'
	obj = get_object_or_404(BlogPost, slug=slug)
	form = BlogPostForm(request.POST or None, instance=obj)
	if form.is_valid():
		form.save()
	context = {'form': form, "title": f"Update {obj.title}"}
	return render(request, template_name, context)
'''