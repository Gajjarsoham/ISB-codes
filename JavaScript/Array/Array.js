// Array //
// An array is index based (0, 1, 2...) collection of elements.
// An array can store multiple of any data type like numbers, strings, or even objects/functions.
// Arrays are object in JavaScript ,if we check it using typeOf() operator it returns object.
// We have to use Array.isArray(array_name) to know it is array or not;

/////// Why array index start with 0? /////////////
// when we write arr[i] so it is equal to *(arr + i).
// arr = Refers to the base address of the array. It is the address of the first element (i.e., &arr[0])
// + i Performs pointer arithmetic. This does not add i bytes. It adds i × sizeof(element_type) bytes
// * Dereferences the computed address to read or write the value.

// So arr[i] literally means: Go i elements away from the start of the array, then access the value stored there.
// when we write arr[0] it skips nothing because the first element is 0 distance away, so therefor 
// the distance of first element is 0 from base address(0).
// So it's index is 0.
// arr[1] == *(arr + 1) — skip 1 element (4 bytes for int)
// arr[2] == *(arr + 2) — skip 2 elements (8 bytes)
// and so on,

/////////////// Each index represents how many elements to move forward from the base address.
// index is offset measued in elements.
// Offsets start at 0 because nothing can be closer than zero distance from the origin.
// And array.length = (largest index + 1)




// Syntax:
// let marks = [40, 60, 55, 70, 30];
// console.log(marks[2] = 10);
// console.log(marks);

////////////// Using the JavaScript keyword new:
// let arr = new Array(1, 2, 3);
// console.log(typeof(arr));
// console.log(arr);
// console.log(Array.isArray(arr));

/////////////// Converting an Array to a String:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let myList = fruits.toString();
// console.log(myList);

///////////// Array Methods: /////////////
// let arr = [10,40,100, 50, 34];

// arr.pop(); //removes last element
// arr.push(); //add element at the end
// arr.shift(); //remove first element
// arr.unshift(); //add element at the start
// arr.splice(2, 2);
// let a = arr.slice(0, 3); // gives array with specified start and end(end is -1 from given) 
// and it not change original array
// arr.reverse(); //it reverse the array
// let newArr = arr.sort(function (a, b){ // sort always expects function which return order of sorting
//     return a-b;
// });
// console.log(newArr);


///////////forEach, map, filter, reduce method ///////////
// this all expects the function

///// forEach //////
// The forEach() method calls a function for each element in an array.
// The forEach() method does not return anything
// let arr = [10,40,100, 50, 34];
// arr.forEach(function (val) {
//     console.log(val + 5);
// })

///// map //////
// map() creates a new array from calling a function for every array element.
// map() does not change the original array. It returns new array
// it is used when we want the new array of the same size of original array.
// whenever we dont return anything it gives undefined.
// let arr = [1, 2 , 3];
// let newArr = arr.map(function (val){
//     return val ** 2; // [1, 4, 9]
// })
// console.log(newArr);

// let arr = [1, 2 , 3];
// let newArr = arr.map(n => n * 2);
// console.log(newArr);

///// filter //////
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not change the original array.
// The filter() method also return something.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = arr.filter(function(val) {
//     if(val > 4) return true;
// })

// console.log(newArr);

///// reduce /////
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not change the original array. It returns new array.
// let arr = [1, 2, 3, 4, 5, 6];

// let newArr = arr.reduce(function (accumulator, val) {
//     return accumulator + val;
// }, 0);
// console.log(newArr); // 21

///// find() /////
// The find() method returns the value of the first element that passes a test.
// returns undefined if no elements are found.
// It creates a new array.

// let arr = [1, 2, 3, 4, 1, 5, 6];

// let newArr = arr.find(function(val) {
//     return val === 1;
// });
// console.log(newArr);

// includes()	    Returns true if an array contains a specified value
// indexOf()	    The index of the first element with a specified value
// lastIndexOf()	The index of the last element with a specified value
// find()	        The value of the first element that passes a test
// findIndex()	    The index of the first element that passes a test
// findLast()	    The value of the last element that passes a test
// findLastIndex()	The index of the last element that passes a test

////// some() /////
// It checks if any array elements pass a test (provided as a callback function) returns true (and stops) if the function returns true for one of the array elements.
// else it will returns false if the function returns false for all of the array elements.
// The some() method does not change the original aray.

// let arr = [10, 30, 32, 90];
// let newArr = arr.any(function (val) {
//     return val > 70;
// });
// console.log(newArr);

////// every() //////
// it checks if all elements in array pass a test and it returns true if all pass otherwise false.
// It will create a new array.
// let arr = [80, 72, 92, 90];
// let newArr = arr.every(function (val) {
//     return val > 70;
// });
// console.log(newArr);


//////////////// Destructuring /////////////
// Extracting values from arrays or objects and storing them into variables in one line.
// Array destructuring is position-based.
// when we don't write anything between semicolon(,) it will skip that element.

// let arr = [1, 2, 3, 4, 5];
// let [a, b,,c] = arr;
// console.log(a, b, c); //1 2 4 skip 3

// Swap variables
// let a = 5;
// let b = 10;

// [a, b] = [b, a]
// console.log(a);
// console.log(b);

//////////////// spread operator ///////////
// Expands (spreads) an iterable (like an array) into individual elements
// like a opening a array.
// Used for merging array, adding elements, copy array(shallow copy), etc

// let arr = [1, 2, 3];
// console.log(...arr); // Output: 1 2 3

////// shallow copy of array
// const a = [1, 2, 3];
// const b = [...a];
// b.push(4);
// console.log(a); // [1,2,3]
// console.log(b); // [1,2,3,4]

////// Merge Arrays
// const a = [1, 2];
// const b = [3, 4];
// const merged = [...a, ...b];
// console.log(merged); // [1,2,3,4]

////////// Q.1 ////////
// const fruits = ["apple", "orange", "banana"];
// console.log(fruits);

////////// Q.2 ////////
// fruits.push("Mango");
// fruits.unshift("Pineapple");
// console.log(fruits);

////////// Q.3 ////////
// fruits.pop();
// fruits.push("kiwi");
// console.log(fruits);

////////// Q.4 ////////
// let colors = ["Green", "Yellow"];
// colors.splice(1, 0 , "Red", "Blue");
// console.log(colors);

////////// Q.5 ////////
// let items = [1, 2, 3, 4, 5, 6];
// console.log(items.slice(2, 5));

////////// Q.6 ////////
// let names = ["Zara", "Arjun", "Mira", "Bhavya"];
// console.log(names.sort().reverse());

////////// Q.7 ////////
// const numbers = [10, 100, 1000];
// console.log(numbers.map(n => n ** 2));

////////// Q.8 ////////
// const num = [42, 423, 2, 8, 50];
// console.log(num.filter((val) => {
//     return val > 10;
// })); // 42, 423, 50

////////// Q.9 ////////
// const num = [10,12,18,20,5];
// console.log(num.reduce((acc, val) => {
//     return acc + val;
// }, 0)); // 65

////////// Q.10 ////////
// const num = [11, 4, 15, 3, 5];
// console.log(num.find((val) => {
//     return val < 10;
// }));

////////// Q.11 ////////
// let arr = [45, 60, 28, 90];
// console.log(arr.some((val) => {
//    return val < 35;
// }));

////////// Q.12 ////////
// let arr = [46, 60, 28, 90];
// console.log(arr.every((val) => {
//     return val % 2===0;
// }));