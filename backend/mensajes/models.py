from django.db import models

class MensajeContacto(models.Model):
    id_men = models.AutoField(primary_key=True)
    rem_men = models.CharField(max_length=200)  # nombre del remitente
    em_men = models.EmailField()               # email
    tel_men = models.CharField(max_length=20)
    tip_men = models.CharField(max_length=100)  # consulta, reclamo, etc.
    mensaje = models.TextField()
    fec_env = models.DateTimeField(auto_now_add=True)
    id_usu_fk = models.ForeignKey('usuarios.Usuario', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Mensaje de {self.rem_men}"