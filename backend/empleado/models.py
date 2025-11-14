from django.db import models

class OrdenCompra(models.Model):
    id_ord = models.AutoField(primary_key=True)
    fec_ord = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=12, decimal_places=2)
    estado = models.CharField(max_length=50)  # pendiente, completada, cancelada
    id_usu_fk = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)

    def __str__(self):
        return f"Orden {self.id_ord}"

class DetalleOrden(models.Model):
    id_det = models.AutoField(primary_key=True)
    cantidad = models.PositiveIntegerField()
    id_ord = models.ForeignKey(OrdenCompra, on_delete=models.CASCADE, related_name='detalles')
    id_med = models.ForeignKey('medicamentos.Medicamento', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.cantidad} x {self.id_med.nom_med}"

class Factura(models.Model):
    id_fac = models.AutoField(primary_key=True)
    num_fac = models.CharField(max_length=50, unique=True)
    fec_emi = models.DateField(auto_now_add=True)
    tot_fac = models.DecimalField(max_digits=12, decimal_places=2)
    id_ord_fk = models.OneToOneField(OrdenCompra, on_delete=models.CASCADE)

    def __str__(self):
        return f"Factura {self.num_fac}"

class Reporte(models.Model):
    id_rep = models.AutoField(primary_key=True)
    tip_rep = models.CharField(max_length=100)
    fec_gen = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=50)
    id_usu_fk = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    id_fac_fk = models.ForeignKey(Factura, on_delete=models.CASCADE)

    def __str__(self):
        return f"Reporte {self.id_rep}"