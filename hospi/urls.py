from django.urls import path
from . import views

urlpatterns = [
    path("",views.home, name="index"),
    path("success/", views.success, name="success"),
    path("Reason/", views.Reason, name="Reason"),
]