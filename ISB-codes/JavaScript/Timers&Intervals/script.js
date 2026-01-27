// The window object allows execution of code at specified time intervals.
// These time intervals are called timing events.
// The two key methods to use with JavaScript are:
    // 1.setTimeout(function, milliseconds)
        // Executes a function, after waiting a specified number of milliseconds.

    // 2.setInterval(function, milliseconds)
        // Same as setTimeout(), but repeats the execution of the function continuously.

// setTimeout(() => {
//     console.log("hello");
// }, 3000);

// setInterval(() => {
//     console.log("hello");
// }, 3000);

///////// clear timeout ///////
// let time = setTimeout(function () {
//     console.log("hey");
// }, 3000);
// clearTimeout(time);

///////// clear interval ///////
// let time = setInterval(function () {
//     console.log("hey");
// }, 3000);
// clearTimeout(time);

//////// Q.....
// let count = 10;
// let interval = setInterval(function() {
//     if(count >= 0){
//         console.log(count);
//         count--;
//     }   
//     else clearInterval(interval);
// }, 1000);


////////Q.......
// let count = 0;
// let seconds = 5;
// let progress = document.querySelector(".progress-bar");
// let percentText = document.querySelector(".percentage");

// let int = setInterval(() => {
//     if(count <= 99){
//         count++;
//         progress.style.width = `${count}%`
//         percentText.textContent = `${count}%`
//     }
//     else{
//         document.querySelector("h2").textContent = "Downloaded"
//         clearInterval(int)
//     }
// }, (seconds * 1000) / 100);