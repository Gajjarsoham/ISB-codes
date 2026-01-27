// loops is used to repeat a block of code multiple times until a specified condition is met.

// 1. For Loop:
// 2. While Loop:
// 3. Do...While Loop:
// 4. For...In Loop:
// 5. For...Of Loop:
// 6. Break and Continue Statements:
// 7. Nested Loops:
// 8. ForEach Method:

// where to start -> where to go -> how to get there
// for loop used in this situation

// where to start -> where to stop -> how to get there
// when we dont know how many times we need to iterate
// while loop used in this situation

///////// For loop //////////

// for (start; condition; change) {
//     // code block to be executed for each iteration
// }

// 1 - 100
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

///////// While loop //////////
// start
// while (condition) {
// code block to be executed as long as the condition is true
// change
// }

// 1 - 32
// let i = 1;
// while(i<=32){
//     console.log(i);
//     i++;
// }

///////// do - while ///////////
// start;
// do{
// code block execute at least one even the condition is false
// }
// while(condition)

// let i = 12;
// do {
//     console.log(i);
//     i++
// } while (i < 2);

///////// break ///////////
// break statement is used to exit a loop or switch statement before it has completed all its iterations or cases.
// for (let i = 1; i <= 10; i++) {
//     console.log(i); // Output: 1, 2, 3, ..., 31
//     if (i === 5) {
//         break; // Exit the loop when i is 5
//     }
// }

///////// continue ///////////
// continue statement is used to skip the current iteration of a loop and move to the next iteration.
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Skip even numbers
//     }
//     console.log(i); // Output: 1, 3, 5, 7, 9
// }

///////// nested loops ///////////
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

///////// Practice Problems ///////////

// 1. Print numbers from 1 to 10 using for loop
// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// 2. Print numbers from 10 to 1 using while loop
// let i = 10;
// while (i >= 1){
//     console.log(i);
//     i--;
// }

// 3. Print even numbers from 1 to 20 using for loop
// for (let i = 1; i <=20; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

// 4. Print odd numbers from 1 to 15 using while loop
// let i = 1;
// while (i <= 15){
//     if (i % 2 != 0){
//         console.log(i)
//     }
//     i++;
// }

// 5. Print the multiplication table of 5.
// using while loop
// let i = 5;
// while (i <= 5){
//     let j = 1;
//     while (j <= 10){
//         console.log(`${i} * ${j} =`, i * j);
//         j++;
//     }
//     i++;
// }

// using for loop
// for (let i = 5; i <= 5; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} =`, i * j)
//     }
// }

// 6. Find the sum of numbers from 1 to 100 using loop.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i
// }
// console.log("sum =", sum);

// 7. Print all numbers between 1 to 50 that are divisable by 3.
// using for loop
// for (let i = 1; i <= 50; i++){
//     if (i % 3 == 0){
//         console.log(i)
//     }
// }

// 8. Ask the user for a number and print whether each number from 1 to that number is even odd.
// let val = prompt("Enter a number.");
// for (let i = 1; i <= val; i++){
//     if (i % 2 == 0){
//         console.log(`${i} is even`)
//     } else if (i % 2 != 0){
//         console.log(`${i} is odd`)
//     } else {
//         console.log("Enter a valid number.")
//     }
// }

// 9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

////////// break questions /////////////
// 1. print numbers fro 1 to 100 and stop at the first number divisible by 7.
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i % 7 === 0){
//         break;
//     }
// }

// 2. print numbers from 1 to 20 and skip numbers divisible by 3.
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) continue;
//     console.log(i);
// } 

// 1. print first 5 odd numbers only.
// let Count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 != 0){
//         Count++;
//         console.log(i);
//     }
//     if (Count === 5){
//         break;
//     }
// }

// count how many digits are in number.
// let num = 12345;
// let count = 0;

// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10)
// }
// console.log(count);