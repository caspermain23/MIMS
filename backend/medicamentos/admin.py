from django.contrib import admin
from .models import Categoria, Medicamento, LoteMedicamento

admin.site.register(Categoria)
admin.site.register(Medicamento)
admin.site.register(LoteMedicamento)