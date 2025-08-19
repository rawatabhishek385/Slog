from django.db import models

class Mentor(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=400)
    image = models.ImageField(upload_to='mentors/')  # stores in MEDIA_ROOT/mentors/

    def __str__(self):
        return self.name
    

class Course(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="courses/")
    data_ai_hint = models.CharField(max_length=200, blank=True)
    duration = models.CharField(max_length=50)
    price = models.CharField(max_length=20)
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.title
