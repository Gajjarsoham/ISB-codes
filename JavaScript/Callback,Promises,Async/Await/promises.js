// A Promise is an object that handles asynchronous results.
// It represents a value that may be available now, later, or never.
// A promise has 3 states:
    // Pending – initial state
    // Fulfilled – operation successful
    // Rejected – operation failed
// Promises help avoid "callback hell" by providing a cleaner way to handle async operations.
// Promises have .then() for handling success and .catch() for handling errors.

// 1.
// let myPromise = new Promise(function(resolve, reject) {

//   let success = true; // Change to false to test rejection

//   if (success) {
//     resolve("Task completed!");
//   } else {
//     reject("Task failed!");
//   }

// });
// myPromise
//   .then(function(result) { // here we handle the resolved case
//     console.log(result);
//   })
//   .catch(function(error) { // here we handle the rejected case
//     console.log(error);
//   });

// 2.
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     let success = false; // Change to false to test rejection
//     setTimeout(() => {
//         if (success) {
//             const data = "Sample Data";
//             resolve(data);
//       } else {
//         reject("Error fetching data");
//       }
//     }, 2000);
//   });
// }
// fetchData()
//   .then((data) => {
//     console.log("Fetched Data:", data);
// })
// .catch((error) => {
//   console.log("Error:", error);
// });

// promise chaining
// promise chaining allows multiple asynchronous operations to be performed in sequence.
// Each .then() returns a new promise, allowing further .then() calls.
// 3.
// function firstFunction() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("First Function Complete");
//             resolve();
//         }, 2000);
//     });
// }
// function secondFunction() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Second Function Complete");
//             resolve();
//         }, 1000);
//     });
// }
// firstFunction()
//     .then(() => {
//         return secondFunction();
//     })
//     .then(() => {
//         console.log("All Functions Complete");
//     });

// 4.
// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve("Number is greater than 10");
//     } else {
//       reject("Number is 10 or less");
//     }
//   });
// }

// checkNumber(15)
//   .then(msg => console.log("Success:", msg))
//   .catch(err => console.log("Error:", err));

// 5.
// function simulateAsyncTask(duration) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Task completed in ${duration} ms`);
//     }, duration);
//   });
// }
// simulateAsyncTask(1500)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// 6.
// let pr = new Promise(function (res, rej) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.random() * 10);
//         if (rn > 5) res("resolved with " + rn);
//         else rej("rejected with "+ rn);
//     }, 1000);
// });
// pr
// .then(function (val) {
//     console.log(val);
// })
// .catch(function (val) {
//     console.log(val);
    
// })

// Fetch API Example:
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//     .then(data => {
//     const body = document.body;
//     data.forEach(data => {
//       const userDiv = document.createElement('div');
//         userDiv.innerHTML = `<h3>${data.name}</h3><p>${data.website}</p><hr/>`;
//         body.appendChild(userDiv);
//     });
//   })
//   .catch(error => console.log('Error:', error));