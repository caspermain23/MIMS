from django.db import models

class Inventario(models.Model):
    id_inv = models.AutoField(primary_key=True)
    id_med_fk = models.ForeignKey('medicamentos.Medicamento', on_delete=models.CASCADE)
    sto_act = models.PositiveIntegerField()  # stock actual
    sto_min = models.PositiveIntegerField()  # stock mínimo
    sto_max = models.PositiveIntegerField()  # stock máximo
    fec_act = models.DateTimeField(auto_now=True)  # fecha de actualización
    mot_act = models.TextField()  # motivo de actualización

    def __str__(self):
        return f"Inventario de {self.id_med_fk.nom_med}"