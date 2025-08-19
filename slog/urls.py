from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from slog import settings
from main.views import CourseViewSet, MentorViewSet
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'mentors', MentorViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('url/', include(router.urls)),
    


]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)