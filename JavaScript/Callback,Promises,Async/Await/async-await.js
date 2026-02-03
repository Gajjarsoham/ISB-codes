// Some tasks take time:
    // Fetching data from server
    // Reading file
    // Database query
    // Payment processing
// JavaScript does not block the program while waiting. Instead, it continues executing other code.

// async / await /////
// async/await is syntactic sugar over Promises that makes asynchronous code look synchronous and readable.
    // async → makes a function return a Promise
    // await → pauses execution until Promise resolves

// 1. 
// async function getUsers() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUsers();

// 2.
// async function login(username, password) {
//   let response = await fetch("/api/login", {
//     method: "POST",
//     body: JSON.stringify({ username, password }),
//     headers: { "Content-Type": "application/json" }
//   });

//   let result = await response.json();
//   return result;
// }

// async function handleLogin() {
//   let data = await login("soham", "12345");

//   if (data.success) {
//     console.log("Login Successful");
//   } else {
//     console.log("Invalid Credentials");
//   }
// }
// handleLogin()

// 3.
// let pr = new Promise(function (res, rej) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.random() * 10);
//         if (rn > 5) res("resolved with " + rn);
//         else rej("rejected with "+ rn);
//     }, 1000);
// });
// async function abcd(){
//     try{
//     let val = await pr;
//     console.log(val);
//     }
//     catch(err){
//         console.log(err);
        
//     }
// }
// abcd();