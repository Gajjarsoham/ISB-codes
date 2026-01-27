////////// localStorage //////////
// It allows you to store key-value pairs in a web browser with no expiration date.
// Data stored in localStorage persists even after the browser is closed and reopened.
// size limit is around 5-10 MB depending on the browser.
// we cannot store array, objects, etc in localStorage so ,
// we store only strings in localStorage
// JSON.stringify() method is used to store any value like object,array in localStorge.
// JSON.parse() method is used to get items from localStorage in original format.

////////// SessionStorage //////////
// It allows you to store key-value pairs in a web browser for the duration of the page session.
// Data stored in sessionStorage is cleared when the page session ends, i.e., when the browser tab is closed.
// size limit is similar to localStorage, around 5-10 MB depending on the browser.

////////// Cookies //////////
// Cookies are small pieces of data stored on the client-side and sent to the server with each HTTP request.
// They can have expiration dates and are often used for session management, personalization, and tracking.
// size limit is around 4 KB per cookie, and browsers limit the number of cookies per domain (usually around 20-50).

// Example usage of localStorage
// localStorage.setItem('username', 'JohnDoe');
// console.log('LocalStorage Username:', localStorage.getItem('username'));
// localStorage.removeItem('username');
// localStorage.clear();

// 1.localStorage ///////
// localStorage have many methods like setItem, getItem, removeItem, clear, key, length.
// localStorage.setItem("name", "Soham");   // for storing
// console.log(localStorage.getItem("name"));      // for retrieving
// localStorage.removeItem("name");        // for remove element
// localStorage.setItem("name", "Gajjar")         // updating value

// 2.sessionStorage ///////
// sessionStorage have many methods like setItem, getItem, removeItem, clear, key, length.
// sessionStorage.setItem("name", "Gajjar");
// sessionStorage.clear();

/////////// cookies ///////////
// document.cookie = "email=soham@test.com";
// console.log(document.cookie);

/////// JSON stringify and parse ///////////
// localStorage.setItem("friend", ["akash", "sumit", "amit"]);

// Q..
// JSON.stringify(localStorage.setItem("friends", ["akash", "sumit", "amit"]));
// console.log(JSON.parse(localStorage.getItem("friends")));

// Q..
// let friends = ["soham", "akash", "sumit"];
// localStorage.setItem("friends", JSON.stringify(friends));
// let data = localStorage.getItem("friends");
// console.log(JSON.parse(data));

// Q..
// let arr = [1, 2, 3];
// let obj = { name: "Soham", age: 20 };

// /* Convert everything to string */
// localStorage.setItem("arr", JSON.stringify(arr));
// localStorage.setItem("obj", JSON.stringify(obj));

// let savedArr = JSON.parse(localStorage.getItem("arr"));
// let savedObj = JSON.parse(localStorage.getItem("obj"));

// console.log(savedArr);   // [1, 2, 3]  (Array)
// console.log(savedObj);   // {name: "Soham", age: 20} (Object)


//////////////////////// practice project: theme toggle //

// const body = document.body;
// const toggleBtn = document.querySelector("button");
// const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// /* Apply theme */
// function applyTheme(theme) {
//   body.classList.toggle("dark", theme === "dark");
//   body.classList.toggle("light", theme === "light");
// }

// /* Detect system theme */
// function getSystemTheme() {
//   return mediaQuery.matches ? "dark" : "light";
// }

// /* Initial load */
// const savedTheme = localStorage.getItem("theme");

// if (savedTheme) {
//   applyTheme(savedTheme);
// } else {
//   applyTheme(getSystemTheme());
// }

// /* Toggle button */
// toggleBtn.addEventListener("click", () => {
//   const newTheme = body.classList.contains("dark") ? "light" : "dark";
//   applyTheme(newTheme);
//   localStorage.setItem("theme", newTheme);
// });

// /* System theme change */
// mediaQuery.addEventListener("change", () => {
//   if (!localStorage.getItem("theme")) {
//     applyTheme(getSystemTheme());
//   }
// });
