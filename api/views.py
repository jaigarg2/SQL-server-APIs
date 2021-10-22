from django.shortcuts import render
from .serializers import SensorSerializer
from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Sensor

def home(request):
	return HttpResponse("Home Page")


def test(request):
	sense = Sensor(sensor_sysid="2", temperature="25", 
		humidity="40", pm1_in="121", pm25_in="290", pm10_in="300",
		pm1_out="29", pm25_out="92", pm10_out="59",
		latitude="28.6282", longitude="77.3650")
	sense.save()
	return HttpResponse("OHK")


@api_view(["POST"])
def send_data(request, format=None):
    serializer = SensorSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
