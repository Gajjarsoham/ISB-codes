// Functions is block of code that performes a specific task and can be executed whenever we want.
// we have to call function by it's name to use it

// function functionName (parameters) {
//   code
//   return value;
// }

// finction declaration ///////////////
// function name () {
//     console.log("Hi");
// }

// function dance() {
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
// }

// setTimeout (() => {
//     console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
// }, 5000)

/////////// Function Expression ///////////////

// const greet = function () {
//     console.log("Hello");
// }
// greet();

//////////// fat arrow function ////////////
// const add = (a, b) => {
//   return a + b;
// };

// add(2, 4);

// Short form
// const add = (a, b) => a + b;

// const greet = () => console.log("Hi");
// greet();

/////////// parameters vs arguments //////////
// parameters are variable inside function definition.
// arguments are actal value passed to parameters during function calling.

// function print (parameters) {
// code
// }
// print(arguments);

// function country (v1) { // parameters
//     console.log(`${v1} is country`);
// }
// country("india"); // arguments
// country("australia"); // arguments
// country("USA"); // arguments

//////// Default Parameters /////////
// function add (v1 = 10, v2 = 5) {
//     console.log(v1 + v2);
// }

// add();

//////// Rest parameters ////////////
// function abcd (...val) {
//     console.log(val);

// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

/////// return ////////
// function sum(a, b) {
//   return 12;
// }
// let val = sum();
// console.log(val);

//////////// first class functions ///////////
// functions which are treated as values and passed as arguments in another functions.

// let abc = function () {
// }

//
// function abcd (val) {
//      val();
// }

// abcd(function() {
//     console.log("hey");
// })

//////////// higher order functions (hof) ///////////
// functios which returns function OR accepts a function as a parameter.

// function abc(){
//     return function(v){
//         console.log(`${v} hey`);
//     }
// }
// abc()(5);

//////// Pure vs. impure function ///////////

// -pure function : which don't change outside value.
// -impure function : which change outside value.

// let a = 12;

// function abcd(){
//     console.log("hey");
// }
// abcd();

// function hey () {
//     return a++;
// }
// hey();

///////////// closures (Important) ////////////
// A closure is created when a function remembers the variables from its outer ////(lexical) scope, even after that outer function has finished executing.

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const increment = counter();
// increment(); // 1
// increment(); // 2

// function abcd () {
//     let a = 12;
//     return function() {
//         console.log(a);
//     }
// }
// abcd();

// function outer() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(count);
//   }
//   return increment;
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3

///////// lexical scoping ///////////
// Inner functions can access outer variables

// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(++x);
//   }
//   inner();
// }
// outer();

// function abcd () {
//     let a = 12;            // a start from here
//     function efg () {
//         let b = 20;          // b start from here
//         console.log(++a);
//         function hij () {
//             let c = 30;          // c start from here
//             console.log(++b);
//         }                        // c ends from here
//         hij();
//     }                        // b ends from here
//     efg();
// }                          // a ends from here
// abcd();

///////////// IIFE (Immediately Invoked Function Expressions) ////////////////
// An IIFE is a JavaScript function that runs immediately after it is defined.

// (function () {
//     console.log("hey");
// })();

// (function () {
//   console.log("Calculating...");
//   return 5 * 5;
// })();

// console.log(result); // 25

// ((a, b) => {
//   console.log(a + b);
// })(5, 3);

////////////////// hoisting ////////////////

// abcd();
// function abcd(){
//     console.log("heyheyhey");

// }

////////// THIS Keyword /////////////
// its value depends on how a function is called, not where it is written.
// this is decided at call-time, not at write-time
// (❌ except arrow functions)
// this refers to the object that is currently calling the function
// this in the Global Scope

// const user = {
//   name: "Soham",
//   greet: function () {
//     console.log(this.name);
//   }
// };
// user.greet(); // Soham

// const name = "Global";
// const user = {
//   name: "Soham",
//   greet: function () {
//     console.log(name);
//   },
// };

// user.greet(); // "Global"

// Object properties are NOT variables
// So we cant just write only property like name, etc.
// because object properties are not defined as variable and JS give error.
// You must access them through:
//      this.property
//      or object.property

// Fixing this in Normal Functions
// Solution 1: Store this
//     const user = {
//   name: "Soham",
//   greet: function () {
//     const self = this;
//     function inner() {
//       console.log(self.name);
//     }
//     inner();
//   }
// };

// user.greet(); // Soham//

// Solution 2: bind
// function greet() {
//   console.log(this.name);
// }

// const user = { name: "Soham" };
// const boundFn = greet.bind(user);
// boundFn();

// this in Arrow function //////
// Arrow functions DO NOT have their own this They inherit this from their surrounding scope.
// This is called lexical this
// const user = {
//   name: "Soham",
//   greet: function () {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   }
// };

// user.greet(); // Soham

// this in Event Listeners
// button.addEventListener("click", function () {
//   console.log(this); // button
// });

///////// Function Invocation ///////////////////////////////
// Function invocation simply means calling a function so that its code runs.

// function greet() {
//   console.log("Hello!");
// }
// greet(); // function invocation

///////// function invocation and this Keyword: //////////
// a) 
// Normal Function Invocation //
// function show() {
//   console.log(this);
// }
// show();

// In browser → this = window
// In strict mode → this = undefined

// b) 
// Method Invocation (Function inside Object) //
// const user = {
//   name: "Soham",
//   greet() {
//     console.log(this.name);
//   }
// };
// user.greet();
// this refers to user //

// c)
// Constructor Function Invocation (new) //
// function Person(name) {
//   this.name = name;
// }
// const p1 = new Person("Soham");
// console.log(p1.name);

// A new object is created
// this points to that new object

//////////// function call() //////////////////
// It can be used to invoke (call) a method with an object as an argument (parameter).
// With call(), an object can use a method belonging to another object.
// Invokes a function immediately
// Sets this explicitly
// Passes arguments one by one
// const Person = {
//     fullname: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const Person1 = {
//     firstName: "Soham",
//     lastName: "Gajjar"
// };
// const Person2 = {
//     firstName: "My",
//     lastName: "name"
// };
// console.log(Person.fullname.call(Person1));

//////////// function apply() //////////////////
// The apply() method takes arguments as an array.
// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// person.fullName.apply(person1, ["Oslo", "Norway"]);

//////////// function bind() /////////////////////
// With the bind() method, an object can borrow a method from another object.
// Permanently binds this
// Returns a new function
// Syntax : const newFunction = functionName.bind(thisArg, arg1, arg2)

// function greet(city) {
//   console.log(`Hi, I am ${this.name} from ${city}`);
// }
// const user = { name: "Soham" };
// const boundGreet = greet.bind(user, "Pune");
// boundGreet(); // invoked later


// Q.     /////////////
// function getScore (...scores) {
//     let total = 0;
//     scores.forEach(function(val){
//         total = total + val;
//     })
//     return total;
// }

// console.log(getScore(10, 20, 30, 40, 50));

///////////// Q. BMI calculator /////////////////
// function bmi (weight, height) {
//     return weight / (height*height);
// }

// console.log(bmi(50, 1.5).toFixed(2));

///////////// Q. Reusable discount calculator (HOF) /////////////////
// function discountCalculator(discount) {
//     return function (price) {
//         return price - price * (discount / 100);
//     }
// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);

// console.log(twenty(200));
// console.log(twenty(200));

///////////// Q. counter using closures /////////////////
// function counter () {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     }
// }

// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());

///////////// Q. Create a pure function to transform value /////////////////
// function double (val) {
//     return val * 2;
// }

// console.log(double(5));

///////////// Q. use IIFE to isolate variables /////////////////
// (function () {
//     const password = "Secret password";
//     console.log(password);
// })();
// console.log(password); // Reference Error

///////////// Use a function to log even numbers in array ///////////////////
// let array = [3, 10, 18, 9, 45, 11];
// function even () {
//     array.forEach(function (num) {
//         if(num % 2 == 0){
//             console.log(num);
            
//         }
//     })
// }
// even();