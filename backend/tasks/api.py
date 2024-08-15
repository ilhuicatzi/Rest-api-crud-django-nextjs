from rest_framework import viewsets, permissions
from .models import Tasks
from .serializers import TaskSerializer

class TasksViewSet(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TaskSerializer