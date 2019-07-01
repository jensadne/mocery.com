from django.conf import settings
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('brixdb/', include('brixdb.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(path(r'__debug__/', include(debug_toolbar.urls)))
