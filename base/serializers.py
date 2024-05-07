from rest_framework import serializers
from .models import Device, DeviceImage

class DeviceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceImage
        fields = ('pk', 'device', 'image')

class DeviceSerializer(serializers.ModelSerializer):
    images = DeviceImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Device 
        fields = ('pk', 'name', 'first_preis', 'second_preis', 'purpose', 'images')
