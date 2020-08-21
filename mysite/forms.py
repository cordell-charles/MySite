from django import forms
from .models import ContactPost
from django.forms import ValidationError




class ContactPostForm(forms.ModelForm):
	
	content 		= forms.CharField(widget= forms.Textarea)

	class Meta:
		model = ContactPost
		fields = ['title','content', 'name'] # 'image' for later commits
