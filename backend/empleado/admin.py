from django.contrib import admin
from .models import OrdenCompra, DetalleOrden, Factura, Reporte

admin.site.register(OrdenCompra)
admin.site.register(DetalleOrden)
admin.site.register(Factura)
admin.site.register(Reporte)