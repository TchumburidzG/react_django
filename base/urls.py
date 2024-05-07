from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, re_path
from django.contrib import admin
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.front, name="front"),
    # Path to handle the list of devices
    re_path(r'^api/devices/$', views.devices_list),
    # Path to handle a specific device detail
    re_path(r'^api/devices/(\d+)$', views.devices_detail),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
