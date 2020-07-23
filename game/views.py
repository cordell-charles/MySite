from django.http import Http404
from django.shortcuts import render, get_object_or_404, redirect




def hangman_retrieve_view(request):
	# hangman game view
	template_name = 'hangman/index.html'
	return render(request, template_name)


def rps_retrieve_view(request):
	# Rock-Paper-Scissors game view
	template_name = 'rock-paper-scissors/index.html'
	return render(request, template_name)



