// date: 30/1/2026
// 1. Synchronous
// Synchronous = blocking
// Each task waits for the previous task to finish.
// JavaScript executes code line by line.
// One task at a time - Blocks execution - Simple to understand - Can make app slow

// console.log("Synchronous Start");
// console.log("Task 1");
// console.log("Task 2");
// console.log("Synchronous End");

// 2. Asynchronous
// Non-blocking
// Long tasks run in background.
// JS continues executing next code.
// Multiple tasks at a time - Non-blocking - More complex - Improves performance
// Common Async Operations - API calls (fetch),setTimeout/setInterval,File reading,Database calls

// console.log("Asynchronous Start");
// setTimeout(() => {
//   console.log("Task 1 (after 2 seconds)");
// }, 2000);

// setTimeout(() => {
//   console.log("Task 2 (after 1 second)");
// }, 1000);
// console.log("Asynchronous End");

// 3. Callbacks //
// A function passed as an argument to another function.
// A callback is a function that runs after another function finishes its work.
// Called when the async task completes.
// Can lead to "callback hell" if not managed properly.

// callback hell
// You have many nested callbacks inside callbacks,
// Making code hard to read, hard to maintain, and hard to debug.

// loginUser(function(user) {
//   getUserProfile(user.id, function(profile) {
//     getUserPosts(profile.id, function(posts) {
//       console.log(posts);
//     });
//   });
// });

// Why This Is Bad
    // Difficult to read
    // Hard to understand flow
    // Hard to handle errors
    // Hard to modify
// This structure is called:
    // Pyramid of Doom

// Solution 1: Promises
// doTask1()
//   .then(doTask2)
//   .then(doTask3)
//   .catch(error => console.log(error));

// Solution 2: Async / Await
// async function runTasks() {
//   try {
//     await doTask1();
//     await doTask2();
//     await doTask3();
//   } catch (error) {
//     console.log(error);
//   }
// }
// runTasks();


// 1.
// console.log("Callback Example Start");
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = "Sample Data";
//     callback(data);
//   }, 2000);
// }
// fetchData((data) => {
//   console.log("Fetched Data:", data);
// });
// console.log("Callback Example End");

// 2.
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Soham", sayBye);

// 3.
// function getData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// getData(function(result) {
//   console.log(result);
// });

// 4.
// function firstFunction(callback) {
//   setTimeout(() => {
//     console.log("First Function Complete");
//     callback();
//   }, 2000);
// }
// function secondFunction() {
//   console.log("Second Function Complete");
// }
// firstFunction(secondFunction);