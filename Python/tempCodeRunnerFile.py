class Student:
    school = "ABC School"   # class variable

    @classmethod
    def get_school(cls):
        print("School:", cls.school)

Student.get_school()