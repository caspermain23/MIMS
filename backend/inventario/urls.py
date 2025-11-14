# backend/medicamentos_inventario/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('usuarios.urls')),
    path('api/', include('medicamentos.urls')),  # ← Esta línea
    # ... otras apps si las tienes
]