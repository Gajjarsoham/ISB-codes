////// 12-1-2026 ////// 
// DOM //
// The HTML DOM (HTML Document Object Model) is an Object Model for HTML Documents.
// The HTML DOM is a tree of Nodes that represents an HTML Page.
// When a web page loads, the browser creates a tree-like representation of the HTML document.

//////////////DOM Manipulation //
// dom manipulation contains many things:
// 1.Accessing HTML Elements
// 2.Changing HTML contents
// 3.Changing HTML Elements
// 4.Changing CSS
// 5.Changing Attributes
// 6.Add Event Listners

////////////////// Accessing HTML Elements //
// The HTML DOM can be used to access HTML elements.
// There are many methods for accessing HTML elements.
// Some of the most used methods are:
// 1.getElementById() - Access an element by its ID
// 2.getElementsByClassName() - Access elements by their class name
// 3.getElementsByTagName() - Access elements by their tag name
// 4.querySelector() - Access the first element that matches a CSS selector
// 5.querySelectorAll() - Access all elements that match a CSS selector

////////// 1. getElementById() //////////
// const heading = document.getElementById("abcd");
// console.dir(heading);

////////// 2. getElementsByClassName() //////////
// const items = document.getElementsByClassName("head");
// console.log(items);

////////// 3. getElementsByTagName() //////////
// const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

////////// 4. querySelector() //////////
// const firstItem = document.querySelector(".head");
// console.dir(firstItem);

////////// 5. querySelectorAll() //////////
// const allItems = document.querySelectorAll(".head");
// console.log(allItems);

////////////////// Changing HTML Contents //
// The HTML DOM can be used to change the content of HTML elements.
// There are several properties that can be used to change the content of HTML elements:
// 1.innerHTML - Changes the HTML content of an element
// 2.innerText - Changes the text content of an element
// 3.textContent - Changes the text content of an element

// const h1 = document.querySelector("h1");
// h1.innerHTML = "<em>New Content</em>"; //add em tag
// h1.innerText = "Old Content"; // just text
// h1.textContent = "Content"; // just text

///////////////// Changing HTML Attributes //
// The HTML DOM can be used to change the attributes of HTML elements.
// There are several methods that can be used to change the attributes of HTML elements:
// 1.setAttribute() - Sets the value of an attribute
// 2.getAttribute() - Gets the value of an attribute
// 3.removeAttribute() - Removes an attribute

// const a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");

// const a = document.querySelector("img");
// a.setAttribute("src", "https://images.unsplash.com/photo-1765768169488-a5575f71e790?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// a.style.width = "50vw";
// a.style.height = "50vh"

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// let a = document.querySelector("a")
// a.removeAttribute("href");

/////////// Dynamic DOM Manipulation //////
// first create element then
// append/prepend element
// append() = Adds (appends) one or several nodes (element) or strings after the the last child of an element
// appendChild() = Adds (appends) a new child node after the the last child of an element
// prepend() = Adds a new child node before the script and first element
// remove() = remove selected elements

// let h1 = document.createElement("h1");
// h1.textContent = "Hello Soham";
// document.body.append(h1);
// document.body.prepend(h1);

// let h1 = document.querySelector("h1");
// h1.remove();

// let h1 = document.createElement("h1");
// h1.textContent = "Hey, My name is Soham";
// document.querySelector("div").prepend(h1);

//////////// Changing CSS Styles //////////
// The HTML DOM can be used to change the CSS styles of HTML elements.
// There are several ways to change the CSS styles of HTML elements:
// 1.Using the style property
// 2.Changing the class attribute

// Using the style property //
// const h1 = document.querySelector("h1");
// h1.style.color = "blue";
// h1.style.backgroundColor = "yellow";
// h1.style.textAlign = "center";
// h1.style.border = "2px solid orange";

////////// classList(add, remove, toggle) //////////
// The classList property returns the CSS classnames of an element.

// const h1 = document.querySelector("h1");
// h1.classList.add("abcd", "efgh"); //can add multiple classes
// h1.classList.item(0); //gives class name at index 0
// console.log(h1.classList.contains("abcd")); //true if class is present else false
// document.querySelector(".abcd").style.color = "red";
// h1.classList.remove("abcd");
// h1.classList.toggle("abcd"); //if class is present then it will remove else it will add

// const h1 = document.querySelector("h1");
// h1.classList.add("hulu");
// h1.classList.remove("hulu");
// h1.classList.toggle("hulu");

// let para = document.querySelectorAll("p");
// let head = document.querySelectorAll("h1");

// para.forEach(elem => {
//     elem.style.fontSize = "68px"
// });