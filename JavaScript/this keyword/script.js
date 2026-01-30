// this keyword //////////////////
// its value depends on how a function is called, not where it is written.
// this is decided at call-time, not at write-time
// (❌ except arrow functions)
// this refers to the object that is currently calling the function
// this in the Global Scope

// this in global scope ////
// console.log(this); // window

// this is function scope ////
// function abcd() {
//     console.log(this); // window
// }
// abcd();

// this in method scope ////
// let obj = {
//     name: "Soham",
//     sayName: function(){ // <- method // refer to object field
//         console.log(this.name);
//     },
// }
// obj.sayName()

// this in event handelers ////
// document.querySelector("h1").addEventListener("click", function() {
//     console.log(this.style.color = "red"); // this refer to selected element
// });

// this in class - blank object ////
// class Abcd{
//     constructor(){
//         console.log("heyhey");
//         this.a = 12;
//     }
// }
// const a = new Abcd(); // a instance
// console.log(a);


// ---------------------------
/////// call():
// let obj = {
//     name: "Soham",
// };
// function abcd () {
//     console.log(this.name);
// }
// abcd.call(obj); // Soham

/////// call():
// let obj = {
//     name: "Soham",
// };
// function abcd (a, b, c) {
//     console.log(this, a, b, c);
// }
// abcd.call(obj, 1, 2, 3);

/////// apply():
// let obj = {
//     name: "Soham",
// };
// function abcd (a, b, c) {
//     console.log(this, a, b, c);
// }
// abcd.apply(obj, [1, 2, 3]);

/////// bind():
// let obj = {
//     name: "Soham",
// };
// function abcd (a, b, c) {
//     console.log(this, a, b, c);
// }
// const a = abcd.bind(obj, 1, 2, 3);
// a();


// practice // not completed
// let form = document.querySelector("form");

// const userManager = {
//     users: [],
//     init: function () {
//         form.addEventListener("submit", this.submitForm.bind(this));
//     },
//     submitForm: function(e){
//         e.preventDefault();
//         this.users.push({

//         })
//     },
//     addUSer: function () {},
//     removeUSer: function () {},
// }

// userManager.init();