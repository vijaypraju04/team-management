from django.db import models


class TeamMember(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, blank=True)
    email = models.EmailField()
    role = models.CharField(max_length=50, default='Regular')

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.role})"
