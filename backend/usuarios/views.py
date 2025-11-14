from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from .models import Usuario
from .serializers import RegisterSerializer


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            usuario = serializer.save()
            return Response({
                "mensaje": "Usuario registrado exitosamente",
                "usuario": {
                    "id": usuario.id_usu,
                    "nombre": f"{usuario.nom_usu} {usuario.ape_usu}",
                    "correo": usuario.cor_usu
                }
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        cor_usu = request.data.get('cor_usu')
        con_usu = request.data.get('con_usu')

        if not cor_usu or not con_usu:
            return Response(
                {"error": "Correo y contraseña son obligatorios"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            user = Usuario.objects.get(cor_usu=cor_usu)
            if user.check_password(con_usu) and user.estado:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'user': {
                        'id': user.id_usu,
                        'nombre': f"{user.nom_usu} {user.ape_usu}",
                        'correo': user.cor_usu
                    }
                }, status=status.HTTP_200_OK)
            else:
                return Response(
                    {"error": "Credenciales inválidas o usuario inactivo"},
                    status=status.HTTP_401_UNAUTHORIZED
                )
        except Usuario.DoesNotExist:
            return Response(
                {"error": "Credenciales inválidas"},
                status=status.HTTP_401_UNAUTHORIZED
            )
