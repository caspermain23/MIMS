import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

# Crear superusuario
email = 'admin@mims.local'
password = 'Admin123456'
nombre = 'Admin'
apellido = 'Usuario'

if not User.objects.filter(cor_usu=email).exists():
    User.objects.create_superuser(cor_usu=email, password=password, nom_usu=nombre, ape_usu=apellido)
    print(f"✓ Superusuario creado exitosamente")
    print(f"  Correo: {email}")
    print(f"  Contraseña: {password}")
    print(f"  Nombre: {nombre} {apellido}")
else:
    print(f"✓ El superusuario '{email}' ya existe")
