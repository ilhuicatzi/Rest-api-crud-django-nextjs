from rest_framework import serializers
from .models import Tasks

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = ('id', 'title', 'description','status', 'created_at')
        read_only_fields = ('id', 'created_at')