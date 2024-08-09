from django.shortcuts import render
from .models import testUser
from django.shortcuts import get_object_or_404
# Create your views here.
def test(request):
    user = testUser.objects.all()
    return render(request, 'appTest/user.html',{'user':user})


def user_detail(request, id):
    user = get_object_or_404(testUser, pk=id)
    #print(user)
    return render(request, 'appTest/user_detail.html', {'user': user})