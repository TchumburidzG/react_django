from base.models import Student, StudentImage

def populate_initial_data():
    # Create students
    student1 = Student.objects.create(name="Student 1", first_preis=100, second_preis=200, purpose="Purpose for Student 1")
    student2 = Student.objects.create(name="Student 2", first_preis=150, second_preis=250, purpose="Purpose for Student 2")

    # Create student images
    StudentImage.objects.create(student=student1, image="media/student_images/sg1.jpg")
    StudentImage.objects.create(student=student2, image="media/student_images/sg3.jpg")

if __name__ == "__main__":
    populate_initial_data()
