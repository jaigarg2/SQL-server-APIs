from django.db import models

# Create your models here.
class Sensor(models.Model):
	sensor_sysid = models.CharField(max_length=30, null=True, default=True)
	created_date = models.DateTimeField(auto_now_add=True)
	temperature = models.CharField(max_length=30, null=True, default=True)
	humidity = models.CharField(max_length=30, null=True, default=True)
	pm1_in = models.CharField(max_length=30, null=True, default=True)
	pm25_in = models.CharField(max_length=30, null=True, default=True)
	pm10_in = models.CharField(max_length=30, null=True, default=True)
	pm1_out = models.CharField(max_length=30, null=True, default=True)
	pm10_out = models.CharField(max_length=30, null=True, default=True)
	pm25_out = models.CharField(max_length=30, null=True, default=True)
	latitude = models.CharField(max_length=30, null=True, default=True)
	longitude = models.CharField(max_length=30, null=True, default=True)

	class Meta:
		db_table = 'GRPS_Test'
