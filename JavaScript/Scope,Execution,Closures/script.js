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


