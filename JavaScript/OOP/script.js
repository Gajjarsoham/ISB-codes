// we create a blueprint that define that how each object is shown and we can create many objects with different values using classes

// function CreateBiscuits(name, price, qty, company, category) {
//     this.name = name;
//     this.price = price;
//     this.qty = qty;
//     this.company = company;
//     this.category = category;
// }
// let biscuit1 = new CreateBiscuits("Oreo", 10, 5, "Cadbury", "Chocolate");
// console.log(biscuit1);
// let biscuit2 = new CreateBiscuits("Fantasy", 20, 3, "Parle", "Chocolate Filled");
// console.log(biscuit2);

/// constructor function - first letter is capital ///////////
// function CreatePencil(name, price, color, company){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color
//         document.body.append(h1)
//     }
// }
// let pencil1 = new CreatePencil("apsara", 10, "black", "Apsara");
// let pencil2 = new CreatePencil("Nataraj", 10, "red", "nataraj");
// let pencil3 = new CreatePencil("Doms", 10, "blue", "doms");

/// prototypes //////////
// Every JavaScript object has a hidden property called [[Prototype]] (accessible via __proto__).
// It is an object from which the current object inherits properties and methods.
// Prototype is an object that is used as a fallback source of properties and methods when they are not found in the current object.
// if a constructor function attach some field on it's prototype then a all new instances or objects to be made by that constructor automatically go to the objects..

// function CreatePencil(name, price, color, company){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company
// }
// CreatePencil.prototype.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.append(h1);
//     }
// let pencil1 = new CreatePencil("apsara", 10, "black", "Apsara");
// let pencil2 = new CreatePencil("nataraj", 10, "red", "Nataraj");

/// classes ///////////////
// A class is a blueprint (template) used to create objects.
// It defines: Properties (data), Methods (functions)
// Built on top of prototypes
// constructor Runs automatically when object is created.

// 1.
// class Student {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hello I am " + this.name);
//     }
// }
// const s1 = new Student("Soham", 21);
// s1.greet();

// 2.
// class CreatePencil {
//   constructor(name, company, price, color) {
//     this.name = name;
//     this.company = company;
//     this.price = price;
//     this.color = color;
//   }
//   erase() {
//     document.body.querySelectorAll("h1").forEach((elem) => {
//         if(elem.style.color === this.color){
//             elem.remove();
//         }
//     })
//   }
//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.append(h1);
//   }
// }
// let p1 = new CreatePencil("natara", "Nataraj", 10, "blue");
// let p2 = new CreatePencil("apsara", "Apsara", 15, "red");

// p1.write("Hello from Nataraj");
// p2.write("Hello from Apsara");


////////// inheritance /////////////
// Inheritance allows a class to acquire properties and methods of another class using extends or prototype chaining.

// 1.
// class Animal {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }
//     makeSound() {
//         console.log("Animal sound");
//     }
// }
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name, "Dog"); // Call the parent class constructor
//         this.breed = breed;
//     }
//     makeSound() {
//         console.log("Woof Woof");
//     }
// }

// const dog1 = new Dog("Buddy", "Golden Retriever");
// console.log(dog1.breed); // Output: Golden Retriever

// 2.
class User {
    constructor(name,address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }
    write (text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
class Admin extends User {
    constructor(name, address, username, email){
        super(name, address, username, email);
        this.role = "admin";
    }

    remove(){
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.textContent.includes(this.name)){
                elem.remove();
            }
    })
    }
}
let u1 = new User("Soham", "Mumbai", "soham123", "soham@example.com");
let u2 = new User("Riya", "Delhi", "riya456", "riya@example.com");
let a1 = new Admin("Admin1", "Bangalore", "admin1", "admin1@example.com");