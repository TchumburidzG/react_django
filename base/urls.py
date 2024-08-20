from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", TemplateView.as_view(template_name="index.html"), name="front"),
    # Catch-all pattern to serve the React app
    re_path(r"^(?:.*)/?$", TemplateView.as_view(template_name="index.html")),
]

# If you're using the static files in development
if settings.DEBUG:
    from django.conf.urls.static import static
    from django.conf import settings
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
