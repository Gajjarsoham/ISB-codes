///// 15-1-2026 //////
//////// forms and form validation ////////

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// const nameRegex = /^[A-Za-z ]+$/;

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (nm.value.length <= 2) {
//     document.querySelector("#hide").style.display = "block";
//   }
//   else {
//         document.querySelector("#hide").style.display = "none";
//   }
// });

/////////// Rgular Expressions (RegExp) /////////////
// A Regular Expression is a sequence of characters that forms a search pattern.
// JavaScript RegExp is an Object for handling Regular Expressions.
// Regex (Regular Expression) is a pattern used to find, match, extract, replace, or validate text.

// How to Create Regex in JS ///////
// const pattern = /^[a-z]+$/;
// const pattern = new RegExp("^[a-z]+$");

// let nm = document.querySelector("#name");
// let email = document.querySelector("#email");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const nameRegex = /^[a-zA-Z0-9_]{3,20}$/;
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   if (!nameRegex.test(nm.value)) {
//     alert("Invalid name");
//   }
//   if (!emailRegex.test(email.value)) {
//     alert("Invalid email");
//   } else {
//     console.log("submit successfuly");
//   }
// });

// Q.........
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("#loginForm");

// let emailError = document.querySelector("#emailError");
// let passwordError = document.querySelector("#passwordError");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Clear old errors
//     emailError.textContent = "";
//     passwordError.textContent = "";
//     emailError.style.display = "none";
//     passwordError.style.display = "none";

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     let emailAns = emailRegex.test(email.value);
//     let passwordAns = passwordRegex.test(password.value);

//     let isValid = true;

//     if (!emailAns) {
//         emailError.textContent = "Email is incorrect";
//         emailError.style.display = "block";
//         isValid = false;
//     }

//     if (!passwordAns) {
//         passwordError.textContent = "Password is incorrect";
//         passwordError.style.display = "block";
//         isValid = false;
//     }

//     if(isValid){
//         document.querySelector("#resultMsg").textContent = "Everything is correct"
//     }
// });