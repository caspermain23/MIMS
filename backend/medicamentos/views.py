from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Medicamento
from .serializers import MedicamentoSerializer

class MedicamentoListView(ListAPIView):
    queryset = Medicamento.objects.all()
    serializer_class = MedicamentoSerializer
    permission_classes = [IsAuthenticated]