from django import forms


class CreateForm(forms.Form):
    key = forms.CharField(label='key',max_length=100)
    value = forms.CharField(label='value', max_length=100)

class UpdateForm(forms.Form):
    name = forms.CharField(label='Name', max_length=100)