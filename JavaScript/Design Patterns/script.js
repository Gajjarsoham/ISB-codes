// Design Patterns in JavaScript are proven, reusable solutions to common programming problems.
// They are not libraries or frameworks — they are ways of organizing code so it becomes:

// ✔ Easier to understand
// ✔ Easier to maintain
// ✔ Easier to scale
// ✔ Less error-prone

// Main Categories of Design Patterns--- //
// 1. Creational Patterns (Object Creation) //
// Control how objects are created.
// Examples:
    // Constructor
    // Factory
    // Singleton
    // Builder
// Use when
// You want flexible and controlled object creation.

// 2. Structural Patterns (Structure of Objects) //
// Focus on how objects relate to each other.
// Examples:
    // Module
    // Decorator
    // Adapter
    // Facade
// Use when:
// You want to organize and combine objects cleanly.

// 3. Behavioral Patterns (Object Communication) //
// Handle communication between objects.
// Examples:
    // Observer
    // Strategy
    // Command
    // Iterator
// Use when:
// You want flexible behavior without tight coupling.


// 1. Module Pattern ///////////////////////////////
// Encapsulates data and exposes only what is needed.

// const Counter = (function () {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//     },
//     getCount() {
//       return count;
//     }
//   };
// })();

// Counter.increment();
// console.log(Counter.getCount()); // 1

// 2. Singleton Pattern ///////////////////////////////////
// Only one instance exists.

// const Database = (function () {
//   let instance;

//   function createInstance() {
//     return { name: "MainDB" };
//   }

//   return {
//     getInstance() {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     }
//   };
// })();

// const db1 = Database.getInstance();
// const db2 = Database.getInstance();

// console.log(db1 === db2); // true

// 3. Factory Pattern /////////////////////////////////
// Creates objects without exposing creation logic.

// function UserFactory(type) {
//   if (type === "admin") {
//     return { role: "Admin" };
//   } else {
//     return { role: "User" };
//   }
// }

// const u1 = UserFactory("admin");

// 4. Observer Pattern //////////////////////////////
// Objects subscribe and get notified.

// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(fn) {
//     this.observers.push(fn);
//   }

//   notify(data) {
//     this.observers.forEach(fn => fn(data));
//   }
// }

// const news = new Subject();
// news.subscribe(msg => console.log("Reader:", msg));
// news.notify("Breaking News!");
