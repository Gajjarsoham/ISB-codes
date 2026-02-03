// Fetch API ////
// The Fetch API is the modern way to make HTTP requests (GET, POST, PUT, DELETE…) from JavaScript to servers, APIs, or backend services.
// It is the backbone of:
// Loading data from servers
// Sending form data
// Authentication
// CRUD operations
// Building dynamic web apps

// fetch() is a built-in JavaScript function that sends a network request and returns a Promise that resolves to a Response object.
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// 1. //
// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getUsers();

// 2. //
// fetch("https://randomuser.me/api/")
//   .then((rawdata) => rawdata.json())
//   .then(data => console.log(data.results[0].name.first))
//   .catch((err) => console.log(err));

/// POST Request (Send Data) ////////////
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Hello",
//     body: "This is a post",
//     userId: 1
//   })
// })
// .then(res => res.json())
// .then(data => console.log(data));

/// Fetch Options Object ///
// {
//   method: "POST",
//   headers: {},
//   body: {},
//   mode: "cors",
//   credentials: "include"
// }

// | Option  | Purpose      |
// | ------- | ------------ |
// | method  | HTTP method  |
// | headers | Metadata     |
// | body    | Data to send |

// GET------- ///
// fetch("/users");
// Used to read data

// POST ----- ///////
// fetch("/users", { method: "POST", body: data });
// Used to send data

// Handling HTTP Errors----------- /////////////
// Fetch does NOT reject promise for 404/500.

// async function getData() {
//   const response = await fetch("/api/data");

//   if (!response.ok) {
//     throw new Error("Request Failed");
//   }

//   const data = await response.json();
//   console.log(data);
// }

// Login System---------------- //
// async function login(username, password) {
//   const res = await fetch("/login", {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({ username, password })
//   });

//   return await res.json();
// }

// // Load Products
// const products = await fetch("/products").then(r => r.json());

// // Delete Data
// fetch(`/users/5`, { method: "DELETE" });

// // Update Data
// fetch("/users/5", {
//   method: "PUT",
//   body: JSON.stringify({ name: "Soham" })
// });

// Response Object Methods ///////
// response.json()
// response.text()
// response.blob()
// response.status
// response.ok

/// practice with html code
function getUsers() {
  fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {
      document.querySelector(".users").innerHTML = "";

      data.results.forEach((user) => {
        const card = document.createElement("div");
        card.className =
          "bg-[#C8553D] w-80 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition text-[#F4EBD0]";

        const img = document.createElement("img");
        img.src = user.picture.large;
        img.className =
          "w-24 h-24 mx-auto rounded-full border-4 border-[#D4A017]";

        const name = document.createElement("h2");
        name.textContent = user.name.first + " " + user.name.last;
        name.className = "text-xl font-semibold mt-4";

        const age = document.createElement("p");
        age.textContent = "Age: " + user.dob.age;
        age.className = "text-[#F4EBD0]/80";

        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;
        email.className = "text-sm mt-3";

        const btnBox = document.createElement("div");
        btnBox.className = "flex gap-4 mt-5 justify-center";

        const followBtn = document.createElement("button");
        followBtn.textContent = "Follow";
        followBtn.className =
          "bg-[#D4A017] text-[#4A2C2A] px-4 py-2 rounded-lg hover:bg-[#E9C46A]";

        const msgBtn = document.createElement("button");
        msgBtn.textContent = "Message";
        msgBtn.className =
          "border border-[#F4EBD0] px-4 py-2 rounded-lg hover:bg-[#6B8E23] hover:text-white";

        btnBox.appendChild(followBtn);
        btnBox.appendChild(msgBtn);

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(email);
        card.appendChild(btnBox);

        document.querySelector(".users").appendChild(card);
      });
    })
    .catch((err) => console.log(err));
}

getUsers();

document.querySelector(".refreshBtn").addEventListener("click", function () {
  getUsers();
});
