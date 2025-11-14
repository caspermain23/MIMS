from django.urls import path
from . import views

urlpatterns = [
    path('medicamentos/', views.MedicamentoListView.as_view(), name='medicamento-list'),
]