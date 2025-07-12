from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from store.views import StoreViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'stores', StoreViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
