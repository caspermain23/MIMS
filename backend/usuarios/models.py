from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone


class UsuarioManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, cor_usu, password=None, **extra_fields):
        """
        Crea y guarda un usuario con el correo y contraseña proporcionados.
        """
        if not cor_usu:
            raise ValueError('El usuario debe tener un correo electrónico válido')

        email = self.normalize_email(cor_usu)
        user = self.model(cor_usu=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, cor_usu, password=None, **extra_fields):
        """
        Crea y guarda un superusuario con los permisos de administrador.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('estado', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('El superusuario debe tener is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('El superusuario debe tener is_superuser=True.')

        return self.create_user(cor_usu, password, **extra_fields)


class Usuario(AbstractBaseUser, PermissionsMixin):
    id_usu = models.AutoField(primary_key=True)
    nom_usu = models.CharField(max_length=50, verbose_name="Nombre")
    ape_usu = models.CharField(max_length=50, verbose_name="Apellido")
    cor_usu = models.EmailField(unique=True, verbose_name="Correo electrónico")
    tel_usu = models.CharField(max_length=15, blank=True, null=True, verbose_name="Teléfono")
    tip_doc = models.CharField(max_length=20, blank=True, null=True, verbose_name="Tipo de documento")
    num_doc = models.CharField(max_length=20, blank=True, null=True, verbose_name="Número de documento")
    img_usu = models.ImageField(upload_to='usuarios/', blank=True, null=True, verbose_name="Imagen")
    estado = models.BooleanField(default=True, verbose_name="Activo")
    fecha_registro = models.DateTimeField(default=timezone.now, verbose_name="Fecha de registro")

    # Campos requeridos por Django
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UsuarioManager()

    USERNAME_FIELD = 'cor_usu'
    REQUIRED_FIELDS = ['nom_usu', 'ape_usu']

    def __str__(self):
        return f"{self.nom_usu} {self.ape_usu} ({self.cor_usu})"

    class Meta:
        db_table = 'usuarios_usuario'
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
