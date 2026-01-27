// An object in JavaScript is a collection of key–value pairs that represents a real-world entity or structured data.
// Objects let you group related data together.
// Array = list of things
// Object = thing with properties
// name, age and state is key and
// Soham, 20, Gujarat is values
// We can acces object properties using two ways:
    // 1.Dot notation(.)
        // console.log(user.name); // Soham
    // 2.Bracket notation(dynamic):
        // console.log(user["age"]); // 20

// when we use dot notation it only find exact word inside object scope
// but when we use bracket notation it will access property using any variable
// ex:
// const key = "name"
// console.log(user[key]);

// let user = {
//     name: "Soham",
//     age: 20,
//     state: "Gujarat",
//     Student: true
// };
// console.log(user);
// console.log(user.name); // dot notation
// console.log(user["age"]);
// const key = "name"
// console.log(user[key]);

// JavaScript Object.create() ///////
// creates an object from an existing object.
// const person = {
//  firstName: "John",
//  lastName: "Doe"
// };
// const man = Object.create(person);
// man.firstName = "Peter";
// console.log(man);

// JavaScript Object.assign() ///////
// copies properties from one or more source objects to a target object.
// const person2 = {firstName: "Anne",lastName: "Smith"};
// Assign Source to Target
// Object.assign(person, person2);

// JavaScript Object.fromEntries() /////////
// The fromEntries() method creates an object from a list of key/value pairs.
// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
// ];
// const myObj = Object.fromEntries(fruits);
// console.log(myObj);

// JavaScript Object.groupBy() ////////////
// Object.groupBy() is a modern JavaScript method (ES2023) used to group items of an array into an object, based on a grouping rule (callback function).
// It groups data by a key you decide and returns an object.

// const fruits = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }
// const result = Object.groupBy(fruits, myCallback);
// console.log(result);

// const users = [
//   { name: "Soham", role: "admin" },
//   { name: "Amit", role: "user" },
//   { name: "Neha", role: "admin" }
// ];
// const groupedUsers = Object.groupBy(users, user => user.role);
// console.log(groupedUsers);




///// nesting and deep access ///////
// Deep nesting means objects inside objects inside objects (and/or arrays), going multiple levels deep.
// When accessing or managing data requires multiple dot (.) or bracket ([]) operations, the object is deeply nested.
// const user = {
//     name: "Soham",
//     address: {
//         city: "Ahmedabad",
//         pin: 380015,
//         location: {
//             lat: 23.2,
//             lng: 77.4
//         },
//     },
// };
// console.log(user.address.location.lng);


// const data = {
//   users: [
//     {
//       id: 1,
//       posts: [{ title: "JS Basics" }],
//     },
//   ],
// };
// console.log(data.users[0].posts[0].title);

///////// object destructuring /////////
// The destructuring unpack object properties into variables.
// Destructuring does not change the original object.
// Destructuring run on any iterables.
// const user = {
//     name: "Soham",
//     age: 20,
//     city: "Ahmedabad"
// };
// let {name, age} = user;
// console.log(name, age);
// let {name: n} = user;
// console.log(n);


////////// for-in ////////////
// It is used to iterate over the enumarable properties keys(names) of an object.
// It loop through keys, not values.
// let obj = {
//     name: "Soham",
//     age: 20,
//     weight: 58
// };
// for (let key in obj) {
//     console.log(key, ":", obj[key]);
// };

/////// Object.keys() /////////
// It is used to store each key of object in array
// let obj = {
//     name: "Soham",
//     age: 20,
//     weight: 58
// };
// console.log(Object.keys(obj)); // ['name', 'age', 'weight']

/////// Object.values() /////////
// Returns an array of the property values of an object
// let obj = {
//     name: "Soham",
//     age: 20,
//     weight: 58
// };
// console.log(Object.values(obj)); // ['Soham', 20, 58]

///////// ...spread ///////////
// let obj = {
//     name: "Soham",
//     age: 20,
//     weight: 58
// };
// let obj2 = {...obj};
// obj2["height"] = 10; // it not change original but change nested objects

///////// deep clone ///////
// Deep cloning is necessary when dealing with nested objects.
// The spread operator creates a shallow copy, which means nested objects are still references to the original.
// To create a true deep clone, we use JSON.stringify() and JSON.parse().

// let obj = {
//     name: "Soham",
//     age: 20,
//     email: "test@test.com",
//     address: {
//         city: "Ahmedabad"
//     },
// };

// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj2);
// obj2.address.city = "Indore";

////////// optional chaining /////////
// It is used to access deeply nested object properties without having to check if each reference in the chain is valid.
// If a reference is nullish (null or undefined), the expression short-circuits and evaluates to undefined.

// let obj = {
//     name: "Soham",
//     age: 20,
//     email: "test@test.com",
//     address: {
//         city: "Ahmedabad",
//         location: {
//             lat: 22.3,
//             lng: 20.2
//         },
//     },
// };

// console.log(user?.address?.location?.lat);

// console.log(user?.contact?.phone); // undefined instead of error

// without optional chaining it will give error
// console.log(user.contact.phone); // Uncaught TypeError: Cannot read properties of undefined (reading 'phone')

/////////// computed properties ///////////
// It allows you to use an expression in brackets [] as the property name when defining an object.
// This is useful when you want to create property names dynamically based on variables or expressions.

// let role = "admin"

// let obj = {
//     name: "Soham",
//     age: 20,
//     email: "test@test.com",
//     address: {
//         city: "Ahmedabad"
//     },
//     [role]: "Gajjar",
// };
// console.log(obj);

////////////// object constructor: /////////////
// An object constructor is a function used to create multiple objects with the same structure and behavior.
// Think of it as a blueprint for creating objects.
// name constructor functions with an upper-case first letter.
// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new User("Soham", 20);
// const user2 = new User("Gajjar", 25);
// console.log(user1.name);
// console.log(user2.age);
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
// const u1 = new User("Soham");
// const u2 = new User("Gajjar");
// const u3 = new User("Rahul");
// console.log(u1);
// console.log(u2);
// console.log(u3);

/////////////// Object Prototypes: /////////////
// In JavaScript, every object has a hidden internal property called [[Prototype]] (often accessed as __proto__), which points to another object.
// This linked object is called the prototype.
// Prototype = mechanism for sharing properties and methods between objects
// function User(name) {
//   this.name = name;
// }

// User.prototype.greet = function () {
//   console.log("Hello " + this.name);
// };
// const u1 = new User("Soham");
// u1.greet()

////////Built-in Prototypes ////////
// []      → Array.prototype
// {}      → Object.prototype
// ""      → String.prototype


/////////// Practice Question ////////////
// Q.1 Create an object for a student with name, age, and isEnrolled.
// let user = {
//     name: "Soham",
//     age: 20,
//     isEnrolled: true,
// };
// console.log(user);
// console.log(user["age"]);

// Q.2 
// const obj = {
//     true: "yes",
//     42: "answer"
// };
// console.log(obj);

// Q.3
// let key = "age"
// const user = {
//     age: 20
// }
// console.log(user[key]);

// Q.4
// const course = {
//     title: "javaScript",
//     duration: "4 weeks"
// };

// for(let key in course) {
//     console.log(key, ":", course[key]);
// }

// Q.5
// const course = {
//     title: "javaScript",
//     duration: "4 weeks"
// };
// Object.entries(course).forEach(function (val) {
//     console.log(val[0]+": "+ val[1]);
// })

// Q.6
// const original = {a: 1, b: 2};
// let copy = {...original}
// console.log(copy);

//////////// Object Management ////////////
// 1.Adding or changing an object property
    // Object.defineProperty(object, property, descriptor)
// 2.Adding or changing object properties
    // Object.defineProperties(object, descriptors)
// 3.Accessing a Property
    // Object.getOwnPropertyDescriptor(object, property)
// 4.Accessing Properties
    // Object.getOwnPropertyDescriptors(object)
// 5.Returns all properties as an array
    // Object.getOwnPropertyNames(object)
// 6.Accessing the prototype
    // Object.getPrototypeOf(object)

// let user = {
//     name: "Soham",
//     city: "Ahmedabad",
//     pin: 380015,
// };
// console.log(Object.getOwnPropertyNames(user)); // get all object keys in array
// console.log(Object.defineProperty(user, "year", {value:"2008"})); // add property
// console.log(Object.defineProperty(user, "city", {value:"Indore"})); // change property value

/////////////counter //
// Define object
// const obj = {counter:0};

// // Define setters
// Object.defineProperty(obj, "reset", {
//   get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj, "increment", {
//   get : function () {this.counter++;}
// });
// Object.defineProperty(obj, "decrement", {
//   get : function () {this.counter--;}
// });
// Object.defineProperty(obj, "add", {
//   set : function (value) {this.counter += value;}
// });
// Object.defineProperty(obj, "subtract", {
//   set : function (i) {this.counter -= i;}
// });

// // Play with the counter:
// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;

/////////// Getters and Setters methods /////////////
// Getters and setters allow you to get and set object properties via methods.

// JavaScript Getter (The get Keyword)
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   }
// };
// console.log(person.lang); // en

// JavaScript Setter (The set Keyword)
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   }
// };
// person.lang = "en";
// console.log(person.language);