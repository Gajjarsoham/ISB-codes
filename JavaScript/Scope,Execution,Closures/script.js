// scope // functional, global, block
// It defines how can you use your created variables.

// function scope : use only inside functions
// function abcd() {
//   var a = 12;
// }
// abcd();
// console.log(a);

// global scope : use anywhere in code
// var b = 10;
// console.log(b);

// block scope : use only in {} curly braces
// {
//   var c = 15;
// }
// console.log(c);

/////// lexical scope /////
// A function can access variables from the place where it is defined in the code. //
// In lexical scoping, scope is determined by where variables and functions are written in the code (their physical location).
// JS looks at code structure, not how functions are called.
// Lexical scope defines where variables are accessible based on code structure, while a closure is a function that remembers and continues to access its lexical scope even after the outer function has finished executing.

// function abcd () {
//     let a = 12;
//     function defg() {
//         console.log(a);
//     }
//     defg()
// }
// abcd()

//// dynamic scoping : //////
// it In dynamic scoping, scope is determined by how functions are called at runtime, not where they are written.
// let a = 12; // output is 12
// function abcd (){
//     console.log(a);
// }
// function defg() {
//     let a = 13;
//     abcd();
// }
// defg();

///////////////// Execution context //////////////////
// An Execution Context is an environment where JavaScript code is evaluated and executed.
// Whenever JavaScript runs code, it creates an execution context for it.
// Types of Execution Context
    // 1️⃣ Global Execution Context (GEC): Created when program starts.
        // Only one global context exists.
    // 2️⃣ Function Execution Context (FEC): Created every time a function is called. 

// it is the order in which your code is executed
// it is usually from top to bottom
// ✅ Phases of Execution Context //
    // 1. Memory Creation Phase (Creation Phase):
        // JavaScript scans code and:
        // Allocates memory
        // Stores:
        // Variables → undefined
        // Functions → full function definition
    // 2. Execution Phase:
        // JavaScript runs code line by line:



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
// abcd()();

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

//////// private counters //////
// when we only call outer function and it stop execution and inner function is never execute so we have to store the calling of outer function into variable for execute inner function and then call that vaiable.
// function countForMe() {
//     let c = 0;
//     return function(){
//         c++;
//         console.log(c);
        
//     }
// }
// const count = countForMe(); // get inner function
// count();                    // call inner function
// count();

////// Encapsulation //////////
// Bundling data (variables) and methods (functions) that operate on the data into a single unit (function).
// Controlling access to that data by exposing only certain methods, while keeping the actual data private within the function's scope.

// function createBankAccount(initialBalance) {
//     let balance = initialBalance; // private variable
//     return {
//         deposit: function(amount) {
//             balance += amount;
//             console.log(`Deposited: $${amount}`);
//         },
//         withdraw: function(amount) {
//             if (amount <= balance) {
//                 balance -= amount;
//                 console.log(`Withdrew: $${amount}`);
//             } else {
//                 console.log('Insufficient funds');
//             }
//         },
//         getBalance: function() {
//             console.log(`Balance: $${balance}`);
//         }
//     };
// }

// const myAccount = createBankAccount(100);
// myAccount.deposit(50);
// myAccount.withdraw(30);
// myAccount.getBalance();

// function clickKimiter(){
//     let click = 0;
//     return function() {
//         if(click < 5){
//             click++;
//             console.log(`clicked: ${click} times`);
//         }
//         else {
//             console.error("Limit Exceeded, try after some time");
               
//         }
//     };
// };

// let fnc = clickKimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc(); // error: Limit Exceeded, try after some time


/////// practice toaster 1 /////////
// function createToaster(config){
//     return function(notification){
//         let div = document.createElement("div");
//         div.className = `fixed pointer-events-none ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-4 rounded-lg shadow-lg ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

//         div.textContent = notification;
//         document.body.appendChild(div);

//         setTimeout(() => {
//             document.body.removeChild(div)
//         },config.duration*1000)
//     }
// }
// let toaster = createToaster({
//     positionX: "left",
//     positionY: "top",
//     theme: "dark",
//     duration: 3,
// });
// toaster("This is a dummy notification!")


///////// toaster 2 /////////
function createToaster (config){
    return function(str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-4 rounded-lg shadow-lg`
        document.querySelector(".parent").appendChild(div);

        if(config.positionX !== "left" ||config.positionY !== "top") {
            document.querySelector(".parent").className += ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`
        }

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div)
        }, config.duration * 1000);
    }
}
let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});
toaster("Download Done")
setTimeout(() => {
    toaster("Soham Here")
}, 2000);