# Four Pillers of OOP
# 1)Abstraction    2)Encapsulation     3)Inheritance    4)Polymorphism

# Python is an object oriented programming language.
# Almost everything in Python is an object, with its properties and methods.
# A Class is like an object constructor, or a "blueprint" for creating objects.
# An Object is a unique instance of a class.
# Objects have properties and behaviors associated with them.
# Class is a blueprint for creating objects.

# class methods /////////////////////////
# Class methods are methods that are bound to the class and not the instance of the class.
# They can be called on the class itself, rather than on an instance of the class.
# Class methods are defined using the @classmethod decorator and take the class as the first argument, conventionally named cls.
# first argument of class method is cls, which refers to the class itself.

# Methods belongs to an object of a class and used to perform specific operations. We can divide Python methods in three different categories, which are class method, instance method and static method.

# A Python class method is a method that is bound to the class and not to the instance of the class. It can be called on the class itself, rather than on an instance of the class.

# Most of us often get class methods confused with static methods. Always remember, while both are called on the class, static methods do not have access to the "cls" parameter and therefore it cannot modify the class state.

# Unlike class method, the instance method can access the instance variables of the an object. It can also access the class variable as it is common to all the objects.

# Property Decorators /////////////////////////
# Property decorators are used to define methods that can be accessed like attributes.
# They allow you to define getter, setter, and deleter methods for class attributes.
# The @property decorator is used to define a getter method, which allows you to access the method like an attribute.
# The @<property_name>.setter decorator is used to define a setter method, which allows you to set the value of the attribute.
# The @<property_name>.deleter decorator is used to define a deleter method, which allows you to delete the attribute.

# __init__ Function /////////////////Constructor///////////////////////
# The __init__ function is a special function that is called when an object is created.
# It is used to initialize the object's attributes.
# The __init__ function is also known as the constructor.
# It is called automatically when an object is created.
# The __init__ function can take arguments, which are used to initialize the object's attributes.

# Static Methods //// Methods that don’t use the self parameter (work at class level)
# NOTE : static method can't access or modify class state, while class method can access and modify class state.

# Abstraction //////////
# Hiding the implementation details of a class and only showing the essential features to the user.

# Encapsulation
# Wrapping data and functions into a single unit (object).

# del keyword
# The del keyword is used to delete object properties Or an object in Python.
# It can be used to delete variables, lists, dictionaries, and other objects.
# It is a built-in function in Python.

# Private attributes & Methods //////////////
# Private attributes & Methods are meant to be used only within the class and are not 
# accessible from outside of class
# __ used before variables,methods to make them private

# Inheritance //////////////////
# When one class inherits the properties and methods of another class, 
# it is called inheritance.
# The class that inherits is called the child class or derived class,
# and the class from which it inherits is called the parent class or base class.
# Inheritance allows for code reusability and the creation of a hierarchical
# relationship between classes.
# Inheritance is a fundamental concept in object-oriented programming (OOP).

# Types of Inheritance /////////////////////////
# 1. Single Inheritance: A child class inherits from a single parent class.
# 3. Multilevel Inheritance: A child class inherits from a parent class,
# which in turn inherits from another parent class.
# 2. Multiple Inheritance: A child class inherits from multiple parent classes.
# 4. Hierarchical Inheritance: Multiple child classes inherit from a single parent class.
# 5. Hybrid Inheritance: A combination of two or more types of inheritance.

# Super Method /////////////////////////
# The super() function is used to call the parent class's methods and properties.
# It allows you to access inherited methods that have been overridden in a child class.
# It is commonly used in the constructor of a child class to initialize the parent
# class's properties.





# 1.
# class Car:
#     total_car = 0
    
#     def __init__(self, brand, model):
#         self.__brand = brand
#         self.__model = model
#         Car.total_car += 1
        
#     def get__brand(self):
#         return self.__brand + " !"
        
#     def fullName(self):
#         return f"{self.__brand} {self.__model}"
    
#     def fuel_type(self):
#         return "Petrol or Diesel"
    
#     @staticmethod 
#     def general_description():
#         return "Cars are means of transport"
    
#     @property
#     def model(self):
#         return self.__model
    
# class ElectricCar(Car):
#     def __init__(self, brand, model, battery_size):
#         super().__init__(brand, model)
#         self.battery_size = battery_size
    
#     def fuel_type(self):
#         return "Electric Charge"
        
# my_tesla = ElectricCar("Tesla", "Model S", "85kWh")

# print(isinstance(my_tesla, Car))
# print(isinstance(my_tesla, ElectricCar))
# print(my_tesla.__brand)
# print(my_tesla.get__brand())
# print(my_tesla.fuel_type())
# print(my_tesla.fullName())

# safari = Car("Tata", "Safari")
# safari.model = "City"
# Car("Tata", "Nexon")

# print(safari.general_description())
# print(Car.general_description())
# print(safari.model)
    
# my_car = Car("Toyota", "Corolla")
# print(my_car.brand)
# print(my_car.model)
# print(my_car.fullName())

# my_new_car = Car("Tata", "Safari")
# print(my_new_car.model)

# 2.
# class Battery:
#     def battery_info(self):
#         return "This is battery"
    
# class Engine(Battery):
#     def engine_info(self):
#         return "This is engine"

# class ElectricCar(Battery, Engine, Car):
#     pass

# my_new_tesla = ElectricCar("Tesla", "Model S")
# print(my_new_tesla.engine_info())
# print(my_new_tesla.battery_info())


# 1. Instance Methods example
# class Student:
#     def __init__(self, name):
#         self.name = name   # instance variable

#     def show(self):        # instance method
#         print("Name:", self.name)

# # Creating object
# s1 = Student("Soham")
# s1.show()

# self refers to the current object


# 2. Class Methods
# A class method works with class-level data, not specific objects.
# Uses cls as first parameter
# Defined using @classmethod
# class Student:
#     school = "ABC School"   # class variable

#     @classmethod
#     def get_school(cls):
#         print("School:", cls.school)

# Student.get_school()

# cls refers to the class itself


# 3. Static Methods
# A static method does not depend on class or instance.
# No self or cls
# Defined using @staticmethod
# class MathUtils:

#     @staticmethod
#     def add(a, b):
#         return a + b

# print(MathUtils.add(5, 3))


# Easy Memory Trick
# Instance method → self → object data
# Class method → cls → class data
# Static method → nothing → utility function

# class Car:
#     brand = "Toyota"   # class variable

#     def __init__(self, name, speed):
#         self.name = name
#         self.speed = speed

#     # Instance method
#     def display(self):
#         print(f"Car: {self.name}, Brand: {Car.brand}, Speed: {self.speed}")

#     # Class method
#     @classmethod
#     def change_brand(cls, new_brand):
#         cls.brand = new_brand

#     # Static method
#     @staticmethod
#     def is_high_speed(speed):
#         return speed > 100

# # Object
# car1 = Car("Nexon", 110)
# car1.display()
# Car.change_brand("Tata")
# car1.display()
# print(Car.is_high_speed(110))


# Access Modifiers ----------------------------
# The Python access modifiers are used to restrict access to class members (i.e., variables and methods) from outside the class. There are three types of access modifiers namely public, protected, and private.
# Public members − A class member is said to be public if it can be accessed from anywhere in the program.
# Protected members − They are accessible from within the class as well as by classes derived from that class.
# Private members − They can be accessed from within the class only.

# Python prescribes a convention of prefixing name of variable/method with single or double underscore to emulate behavior of protected and private access modifiers.

# To indicate that an instance variable is private, prefix it with double underscore (such as "__age").
# To imply that a certain instance variable is protected, prefix it with single underscore (such as "_salary").

# class Employee:
#     def __init__(self, name, age, salary):
#         self.name = name # public variable
#         self.__age = age # private variable
#         self._salary = salary # protected variable
#     def displayEmployee(self):
#         print ("Name : ", self.name, ", age: ", self.__age, ", salary: ", self._salary)

# e1=Employee("Bhavana", 24, 10000)

# print (e1.name)
# print (e1._salary)
# print (e1.__age)


# Getters and Setter Methods ------------
# A getter method retrieves the value of an instance variable, usually named as get_varname, whereas the setter method assigns value to an instance variable − named as set_varname.

# class Employee:
#     def __init__(self, name, age):
#         self.__name = name
#         self.__age = age

#     def get_name(self):
#         return self.__name
#     def get_age(self):
#         return self.__age
#     def set_name(self, name):
#         self.__name = name
#         return
#     def set_age(self, age):
#         self.__age=age

# e1=Employee("Bhavana", 24)
# print ("Name:", e1.get_name(), "age:", e1.get_age())
# e1.set_name("Archana")
# e1.set_age(21)
# print ("Name:", e1.get_name(), "age:", e1.get_age())


# Inheritance ------------
# It is used to inherit the properties and behaviours of one class to another. The class that inherits another class is called a child class and the class that gets inherited is called a base class or parent class.

# Single Inheritance
# This is the simplest form of inheritance where a child class inherits attributes and methods from only one parent class.

# class Parent: 
#     def parentMethod(self):
#         print ("Calling parent method")

# class Child(Parent): 
#     def childMethod(self):
#         print ("Calling child method")

# c = Child()  
# c.childMethod() 
# c.parentMethod() 

# Multiple Inheritance
# Multiple inheritance in Python allows you to construct a class based on more than one parent classes. The Child class thus inherits the attributes and method from all parents. The child can override methods inherited from any parent.

# Multilevel Inheritance
# In multilevel inheritance, a class is derived from another derived class. There exists multiple layers of inheritance. We can imagine it as a grandparent-parent-child relationship.

# class Universe: 
#     def universeMethod(self):
#         print ("I am in the Universe")

# class Earth(Universe): 
#     def earthMethod(self):
#         print ("I am on Earth")

# class India(Earth): 
#     def indianMethod(self):
#         print ("I am in India")      

# person = India()  
# person.universeMethod() 
# person.earthMethod() 
# person.indianMethod() 

# Hierarchical Inheritance
# This type of inheritance contains multiple derived classes that are inherited from a single base class. This is similar to the hierarchy within an organization.

# class Manager: 
#     def managerMethod(self):
#         print ("I am the Manager")

# class Employee1(Manager): 
#     def employee1Method(self):
#         print ("I am Employee one")

# class Employee2(Manager): 
#     def employee2Method(self):
#         print ("I am Employee two")      

# emp1 = Employee1()  
# emp2 = Employee2()

# emp1.managerMethod() 
# emp1.employee1Method()
# emp2.managerMethod() 
# emp2.employee2Method()  

# Hybrid Inheritance
# Combination of two or more types of inheritance is called as Hybrid Inheritance. For instance, it could be a mix of single and multiple inheritance.

# class CEO: 
#     def ceoMethod(self):
#         print ("I am the CEO")

# class Manager(CEO): 
#     def managerMethod(self):
#         print ("I am the Manager")

# class Employee1(Manager): 
#     def employee1Method(self):
#         print ("I am Employee one")

# class Employee2(Manager, CEO): 
#     def employee2Method(self):
#         print ("I am Employee two")      

# emp = Employee2()

# emp.managerMethod() 
# emp.ceoMethod()
# emp.employee2Method()

# super() function --------------
# In Python, super() function allows you to access methods and attributes of the parent class from within a child class.

# class ParentDemo:
#     def __init__(self, msg):
#         self.message = msg

#     def showMessage(self):
#         print(self.message)

# class ChildDemo(ParentDemo):
#     def __init__(self, msg):
#         super().__init__(msg)  

# obj = ChildDemo("Welcome to Tutorialspoint!!")
# obj.showMessage()  


# Polymorphism ---------------
# The term polymorphism refers to a function or method taking different forms in different contexts.
# If a method in a parent class is overridden with different business logic in its different child classes, the base class method is a polymorphic method.
# Ways of implementing Polymorphism in Python
    # Duck Typing
    # Operator Overloading
    # Method Overriding
    # Method Overloading

# Method Overriding in Python --------
# In method overriding, a method defined inside a subclass has the same name as a method in its superclass but implements a different functionality.
# Achieve runtime polymorphism -----

# from abc import ABC, abstractmethod
# class Shape(ABC):   # Abstract class

#     @abstractmethod
#     def area(self):
#         pass

# class Circle(Shape):

#     def __init__(self, radius):
#         self.radius = radius

#     def area(self):   # must implement
#         return 3.14 * self.radius * self.radius

# c = Circle(5)
# print(c.area())

# Method Overloading in Python --------
# When a class contains two or more methods with the same name but different number of parameters then this scenario can be termed as method overloading.
# Python does not allow overloading of methods by default, however, we can use the techniques like variable-length argument lists, multiple dispatch and default parameters to achieve this.
# Achieve compile time polymorpohism

# Way 1: Default Arguments
# class Test:
#     def add(self, a, b, c=0):
#         return a + b + c

# t = Test()
# print(t.add(2, 3))      # 5
# print(t.add(2, 3, 4))   # 9

# Way 2: Variable Arguments (*args)
# class Test:
#     def add(self, *args):
#         return sum(args)

# t = Test()
# print(t.add(2, 3))        # 5
# print(t.add(2, 3, 4, 5))  # 14

# Way 3: Type Checking
# class Test:
#     def add(self, a, b):
#         if isinstance(a, str) or isinstance(b, str):
#             return str(a) + str(b)
#         return a + b

# t = Test()
# print(t.add(2, 3))       # 5
# print(t.add("Hi ", "Soham"))  # Hi Soham

# | Feature        | Overriding             | Overloading                       |
# | -------------- | ---------------------- | --------------------------------- |
# | Meaning        | Redefine parent method | Same method, different parameters |
# | Classes        | Parent & Child         | Same class                        |
# | Python Support | ✅ Yes                 | ❌ No (but simulated)            |
# | Parameters     | Same                   | Different                         |
# | Purpose        | Change behavior        | Handle different inputs           |


# Dynamic Binding ------------
# dynamic binding is the process of resolving a method or attribute at runtime, instead of at compile time.
# Python decides which method to run when the program is executing, not before.

# class Animal:
#     def sound(self):
#         print("Animal makes sound")

# class Dog(Animal):
#     def sound(self):
#         print("Dog barks")

# class Cat(Animal):
#     def sound(self):
#         print("Cat meows")

# def make_sound(animal):
#     animal.sound()   # Which sound() is called?

# a = Dog()
# b = Cat()

# make_sound(a)
# make_sound(b)

# Same function call:
# animal.sound()

# But Python decides at runtime:
# If object is Dog → call Dog's method
# If object is Cat → call Cat's method
# 👉 This is dynamic binding

