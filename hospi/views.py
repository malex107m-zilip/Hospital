from django.shortcuts import render, redirect
from .models import Contact

def home(request):
    if request.method == "POST":
        # Get data from POST
        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        message = request.POST.get("message")

        Contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message
        )
        return redirect("success")
    # Count of appointments from DB
    appointment_count = Contact.objects.count()
    # Send count to template
    context = {
        "appointment_count": appointment_count
    }
    
    
    return render(request, "index.html",context)


def success(request):
    return render(request, "success.html")

def Reason(request):
    return render(request, "Reason.html")
