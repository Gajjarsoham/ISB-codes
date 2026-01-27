<!-- 1. Loops -->
<!-- 2. Funtions -->

<!-- Hoisting -->
- Hoisting is JavaScript’s behavior of processing declarations before code execution.

- Two Phases of JavaScript Execution:
1️⃣ Memory Creation Phase (Hoisting happens here)
Variables are registered
Functions are registered

2️⃣ Execution Phase
Code runs line by line

What Happens During Hoisting?
Type                    What JS Does

var:                    Declared & initialized to undefined
let, const:  	          Declared but NOT initialized
Function declaration:	  Fully hoisted
Function expression:	  Variable hoisted, function NOT
Arrow function:	        Same as function expression
Class:	                Hoisted but TDZ applies
Imports:	              Hoisted (module scope)

1️⃣ var Hoisting (Dangerous):
console.log(a); // undefined
var a = 10;

2️⃣ let and const (Temporal Dead Zone):
console.log(x); // ❌ ReferenceError
let x = 5;

console.log(x); // ❌ ReferenceError
const x = 5;

- They are hoisted but live in TDZ (Temporal Dead Zone)

3️⃣ Function Declarations (Fully Hoisted ✅):
sayHi();

function sayHi() {
  console.log("Hi");
}

4️⃣ Function Expressions (NOT Hoisted):
sayHi(); // ❌ Error

var sayHi = function () {
  console.log("Hi");
};
- What actually happens
var sayHi;
sayHi(); // undefined()

5️⃣ Arrow Functions (Same Rule):
greet(); // ❌

const greet = () => {
  console.log("Hello");
};

6️⃣ Class Hoisting (Tricky):
const p = new Person(); // ❌

class Person {
  constructor(name) {
    this.name = name;
  }
}

Classes:

- Are hoisted
- But NOT accessible before declaration (TDZ)

<!-- TDZ (Temporal Dead Zone) -->

- It is the time between entering a scope and the moment a variable declared with let or const is initialized, during which accessing that variable causes a ReferenceError.
- TDZ applies to let and const, NOT to var.

-Scope Timeline (Important)
{
  // TDZ starts here
  console.log(x); // ❌ ReferenceError
  let x = 5;
  // TDZ ends here
}

<!---------------- Scopes: --------------->
- Scope = where a variable is accessible in your code
- Global → whole building
- Function (local) → one room
- Block → cupboard inside a room

<!-- Global Scope: -->
- A variable declared outside all functions and blocks.
- Anyone can modify them
- Causes bugs, conflicts, memory issues

let x = 10;

function show() {
  console.log(x); // ✅ accessible
}
show();
console.log(x); // ✅ accessible

<!-- Local Scope (Function Scope): -->
- Variables declared inside a function.
- Local variables exist only while the function runs

function test() {
  let a = 5;
  console.log(a); // ✅
}

test();
console.log(a); // ❌ ReferenceError

<!-- Block Scope: -->
- A block = {} used in:
if
for
while
switch
- Only let and const respect block scope.

if (true) {
  let x = 10;
  const y = 20;
}

console.log(x); // ❌
console.log(y); // ❌

var vs let vs const:
| Feature       | `var`             | `let`      | `const`   
| ------------- | ---------------   | ---------  | --------- 
| Scope         | Function          | Block      | Block     
| Hoisting      | Yes (undefined)   | Yes (TDZ)  | Yes (TDZ) 
| Redeclare     | ✅ Yes           | ❌ No      | ❌ No      
| Reassign      | ✅ Yes           | ✅ Yes     | ❌ No      
| Default today | ❌               | ✅         | ✅         

