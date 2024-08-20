from django.db import models

class Device(models.Model):
    name = models.CharField("მოდელი", max_length=240)
    first_preis = models.CharField("საათიების რაოდენობა და ფასი", max_length=100)
    second_preis = models.CharField("საათიების რაოდენობა და ფასი",  max_length=100)
    purpose = models.CharField("დანიშნულება", max_length=400)

    def __str__(self):
        return self.name
    
class DeviceImage(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="device_images/")

    def __str__(self):
        return f"Image for {self.device.name}"