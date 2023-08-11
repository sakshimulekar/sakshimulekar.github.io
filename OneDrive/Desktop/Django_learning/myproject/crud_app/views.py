from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect
from .forms import CreateForm,UpdateForm


data_dict = {
    1: {'name': 'Ram', 'age': 20, 'city': 'Delhi'},
    2: {'name': 'Sita', 'age': 22, 'city': 'Ayodhya'},
    3: {'name': 'Lakshman', 'age': 18, 'city': 'Ayodhya'},
}

#Create operation
def create(request):
    if request.method == 'POST':
        form = CreateForm(request.POST)
        if form.is_valid():
            key = form.cleaned_data['key']
            value = form.cleaned_data['value']
            new_id = max(data_dict.keys()) + 1
            data_dict[new_id] = {'name': value}  # Assuming you want to store 'name'
            return redirect('read')
    else:
        form = CreateForm()
    return render(request, 'create.html', {'form': form})

# Read operation
def read(request):
    return render(request,'read.html',{'data_dict':data_dict})

#update operation
def update_user(request, user_id):
    user_data = data_dict.get(user_id)
    
    if user_data is None:
        return HttpResponse('User not found')
    
    if request.method == 'POST':
        form = UpdateForm(request.POST)
        if form.is_valid():
            updated_user_name = form.cleaned_data['name']
            user_data['name'] = updated_user_name
            
            return HttpResponseRedirect('/read/')
    else:
        form = UpdateForm(initial={'name': user_data['name']})
    
    return render(request, 'update.html', {'form': form})

#delete operation

# views.py
def delete_user(request, user_id):
    user_data = data_dict.get(user_id)
    
    if user_data is not None:
        del data_dict[user_id]  # Remove user data from data_dict
        
    return HttpResponseRedirect('/read/')
