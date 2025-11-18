#!/usr/bin/env python
"""
Script para crear usuarios de prueba: empleado y cliente
Uso: python create_usuarios.py
"""
import os
import django
import sys

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from usuarios.models import Usuario

# Datos de usuarios a crear
usuarios_data = [
    {
        'cor_usu': 'empleado@mims.local',
        'nom_usu': 'Juan',
        'ape_usu': 'Pérez',
        'password': 'Empleado123',
        'estado': True,
    },
    {
        'cor_usu': 'cliente@mims.local',
        'nom_usu': 'María',
        'ape_usu': 'García',
        'password': 'Cliente123',
        'estado': True,
    }
]

print("=" * 60)
print("Creando usuarios de prueba...")
print("=" * 60)

usuarios_creados = 0
usuarios_existentes = 0

for usuario_info in usuarios_data:
    try:
        # Verificar si el usuario ya existe
        if Usuario.objects.filter(cor_usu=usuario_info['cor_usu']).exists():
            print(f"✓ El usuario {usuario_info['cor_usu']} ya existe")
            usuarios_existentes += 1
        else:
            # Crear nuevo usuario
            usuario = Usuario.objects.create_user(
                cor_usu=usuario_info['cor_usu'],
                nom_usu=usuario_info['nom_usu'],
                ape_usu=usuario_info['ape_usu'],
                password=usuario_info['password'],
                estado=usuario_info['estado'],
            )
            print(f"✓ Usuario creado: {usuario_info['cor_usu']}")
            usuarios_creados += 1
    except Exception as e:
        print(f"✗ Error al crear {usuario_info['cor_usu']}: {str(e)}")
        sys.exit(1)

print("=" * 60)
print(f"Resumen:")
print(f"  • Usuarios creados: {usuarios_creados}")
print(f"  • Usuarios existentes: {usuarios_existentes}")
print("=" * 60)
print("\n✅ Proceso completado exitosamente")
print("\nCredenciales de acceso:")
print("  Email: empleado@mims.local | Contraseña: Empleado123")
print("  Email: cliente@mims.local  | Contraseña: Cliente123")
print("\n")
