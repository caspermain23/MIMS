# backend/medicamentos/serializers.py

from rest_framework import serializers
from .models import Medicamento, Categoria

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id_cat', 'nom_cat', 'des_cat']

class MedicamentoSerializer(serializers.ModelSerializer):
    id_cat_fk = CategoriaSerializer(read_only=True)
    img_med = serializers.ImageField(use_url=True)  # ← Esto es clave

    class Meta:
        model = Medicamento
        fields = ['id_med', 'nom_med', 'des_med', 'pre_med', 'med_usu', 'img_med', 'id_cat_fk']