from rest_framework import serializers
from .models import Usuario


class RegisterSerializer(serializers.Serializer):
    nom_usu = serializers.CharField(max_length=100)
    ape_usu = serializers.CharField(max_length=100)
    cor_usu = serializers.EmailField()
    con_usu = serializers.CharField(min_length=6, write_only=True)
    tel_usu = serializers.CharField(max_length=20, required=False, allow_blank=True)
    tip_doc = serializers.CharField(max_length=20)
    num_doc = serializers.CharField(max_length=20)

    def validate_cor_usu(self, value):
        if Usuario.objects.filter(cor_usu=value).exists():
            raise serializers.ValidationError("Este correo ya está registrado.")
        return value

    def validate_num_doc(self, value):
        if Usuario.objects.filter(num_doc=value).exists():
            raise serializers.ValidationError("Este número de documento ya está registrado.")
        return value

    def create(self, validated_data):
        usuario = Usuario(
            nom_usu=validated_data['nom_usu'],
            ape_usu=validated_data['ape_usu'],
            cor_usu=validated_data['cor_usu'],
            tel_usu=validated_data.get('tel_usu', ''),
            tip_doc=validated_data['tip_doc'],
            num_doc=validated_data['num_doc'],
        )
        usuario.set_password(validated_data['con_usu'])
        usuario.save()
        return usuario
