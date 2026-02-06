// AJAX = Asynchronous JavaScript And XML
// AJAX is a technique that lets JavaScript talk to the server in the background and update parts of a webpage without reloading it.
// Think of AJAX as a messenger between your page and the server.
// AJAX = JavaScript → Server → Data → Update Part of Page

// AJAX itself is not a tool you “install”.
// You use:
// fetch()
// or XMLHttpRequest
// These are JavaScript features.
// AJAX = Concept + Technique
// AJAX is a technique for accessing web servers from a web page.

// 1️⃣ What is XMLHttpRequest?
// XMLHttpRequest is a JavaScript object that allows a web page to:
// 👉 Send HTTP requests to a server
// 👉 Receive responses
// 👉 Do this without reloading the page
// XMLHttpRequest is a built-in browser object used to exchange data between browser and server asynchronously.
// Create → Open → Send → Receive → Process

// XMLHttpRequest moves through 5 states:
// Value	State	            Meaning
// 0	    UNSENT	            Object created
// 1	    OPENED	            open() called
// 2	    HEADERS_RECEIVED	Server received request
// 3	    LOADING	            Response downloading
// 4	    DONE	            Finished

// 1. ////
// let btn = document.querySelector("button").addEventListener("click",loadData=> {
//   fetch("message.txt")
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById("output").innerHTML = data;
//     });
// })
// loadData();

// 2. ////
/// Example (GET) ///
// let btn = document
//   .querySelector("button")
//   .addEventListener("click", (loadDoc) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "ajax_info.txt", true);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         document.getElementById("demo").innerHTML = xhr.responseText;
//       }
//     };
//     xhr.send();
//   });

// 3. ////
// POST Request Example //
// let xhr = new XMLHttpRequest();
// xhr.open("POST", "server.php", true);
// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.send("name=Soham&age=20");

let btn = document
  .querySelector("button")
  .addEventListener("click", function loadDoc() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      myFunction(this);
    };
    xhr.open("GET", "cd_catalog.xml");
    xhr.send();
  });

function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");

  let table = "<table border='1'>";
  table += "<tr><th>Artist</th><th>Title</th></tr>";

  for (let i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }

  table += "</table>";

  document.getElementById("demo").innerHTML = table;
}
