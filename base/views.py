from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Device
from .serializers import DeviceSerializer, DeviceImageSerializer  # Import the new serializers
from rest_framework.pagination import PageNumberPagination

def front(request):
    context = {}
    return render(request, "index.html", context)
class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10  # Number of records per page

@api_view(['GET', 'POST'])
def devices_list(request):
    if request.method == 'GET':
        paginator = StandardResultsSetPagination()
        devices = Device.objects.all()
        paginated_devices = paginator.paginate_queryset(devices, request)
        serializer = DeviceSerializer(paginated_devices, context={'request': request}, many=True)
        return paginator.get_paginated_response(serializer.data)

    elif request.method == 'POST':
        serializer = DeviceSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            device = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def devices_detail(request, pk):
    try:
        device = Device.objects.get(pk=pk)
    except Device.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = DeviceSerializer(device, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        device.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
