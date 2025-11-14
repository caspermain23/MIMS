from django.db import models

class Categoria(models.Model):
    id_cat = models.AutoField(primary_key=True)
    nom_cat = models.CharField(max_length=100)
    des_cat = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nom_cat

class Medicamento(models.Model):
    id_med = models.AutoField(primary_key=True)
    nom_med = models.CharField(max_length=200)
    des_med = models.TextField(blank=True, null=True)
    pre_med = models.DecimalField(max_digits=10, decimal_places=2)
    med_usu = models.CharField(max_length=200)  # fabricante o proveedor
    img_med = models.ImageField(upload_to='medicamentos/', blank=True, null=True)
    id_cat_fk = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='medicamentos')

    def __str__(self):
        return self.nom_med

class LoteMedicamento(models.Model):
    id_lot = models.AutoField(primary_key=True)
    fec_ven = models.DateField()  # fecha de vencimiento
    cant_dis = models.PositiveIntegerField()  # cantidad disponible
    id_med_fk = models.ForeignKey(Medicamento, on_delete=models.CASCADE, related_name='lotes')

    def __str__(self):
        return f"Lote {self.id_lot} - {self.id_med_fk.nom_med}"