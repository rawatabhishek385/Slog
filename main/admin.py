from django.contrib import admin
from .models import Course, Mentor
@admin.register(Mentor)
class MentorAdmin(admin.ModelAdmin):
    list_display = ('name', 'designation')
    
@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'duration', 'price')
