//////////// 13-1-2026 ///////////////
///////////// Events //////////////////
// Events are actions that occur when something happens in the system, such as a user interaction or a change in state. In JavaScript, events are used to trigger specific functions or behaviors when certain actions take place.
// Common events include clicks, mouse movements, keyboard inputs, and page load events.

// select element first
// than add event listner on that element
// in eventListner first write event name and than create function that run on event calling

// let h1 = document.querySelector("h1");

// function click() {
//     h1.style.color = "yellow"
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
//     console.log(e);
// }

// h1.addEventListener("click", click)
// h1.removeEventListener("click", click)

// let inp = document.querySelector("input");
// inp.addEventListener("input", function(e) {
//     console.log(e.data);
// })

//////////// Event Types /////////////////////
// 1. Mouse Events: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove
// 2. Keyboard Events: keydown, keyup, keypress
// 3. Form Events: submit, change, focus, blur
// 4. Window Events: load, resize, scroll, unload
// 5. Touch Events (for mobile devices): touchstart, touchmove, touchend
// 6. Clipboard Events: copy, cut, paste
// 7. Drag and Drop Events: dragstart, dragover, drop, dragend
// 8. Media Events: play, pause, ended, volumechange
// 9. Animation Events: animationstart, animationend, animationiteration
// 10. Transition Events: transitionstart, transitionend, transitionrun

//////////// Event Handlers ////////////////////
// Event handlers are functions that are executed when a specific event occurs. They can be defined in several ways:
// 1. Inline Event Handlers: Defined directly in the HTML element using attributes like onclick, onmouseover, etc.
// 2. DOM Level 0 Event Handlers: Assigned directly to the element's event property in JavaScript.
// 3. DOM Level 2 Event Handlers: Using addEventListener() method to attach multiple event handlers to an element.

// Example of addEventListener:
// let h1 = document.querySelector("h1");

// function handleClick(e) {
//     h1.style.color = "yellow"
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
//     console.log(e);
// };
// h1.addEventListener("click", handleClick);

// Example of removing event listener
// h1.removeEventListener("click", handleClick);

//// Q.
// let h3 = document.querySelector("h3");
// let sel = document.querySelector("select");
// sel.addEventListener("change", (e) => {
//     h3.textContent = `${e.target.value} Device Selected`
// })

//// Q.
// window.addEventListener("keydown", (e) => {
//     if(e.key === " "){
//         document.querySelector("h1").textContent = "space"
//     } else {
//         document.querySelector("h1").textContent = `${e.key}`
//     }
//     // console.log(e.key);
// })

//// Q.
// let btn = document.querySelector("#btn");
// let inp = document.querySelector("input");
// let data = document.querySelector("#data");

// btn.addEventListener("click", () => {
//   inp.click(); // click originl input when btn is clicked
// });

// inp.addEventListener("change", (e) => {
//   // console.log(e.target.files[0].name);
//   const file = e.target.files[0]
//   if(file) {
//     data.textContent = file.name;
//   }
// });

// let form = document.querySelector("form");
// let inp = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// ///////////////// Get cards from localStorage ////////////
// function getCards() {
//   let cards = localStorage.getItem("cards");
//   return cards ? JSON.parse(cards) : [];
// }

// /////////////// Save cards to localStorage /////////////
// function saveCards(cards) {
//   localStorage.setItem("cards", JSON.stringify(cards));
// }

// ///////////// Create card UI ///////////
// function createCard(data) {
//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.src = data.image;

//   let h3 = document.createElement("h3");
//   h3.textContent = data.name;

//   let h5 = document.createElement("h5");
//   h5.textContent = data.role;

//   let p = document.createElement("p");
//   p.textContent = data.desc;

//   profile.appendChild(img);
//   card.appendChild(profile);
//   card.appendChild(h3);
//   card.appendChild(h5);
//   card.appendChild(p);

//   main.appendChild(card);
// }

// /////////////// Render saved cards ///////////
// let cards = getCards();
// cards.forEach(cardData => createCard(cardData));

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let cardData = {
//     image: inp[0].value,
//     name: inp[1].value,
//     role: inp[2].value,
//     desc: inp[3].value
//   };

//   let cards = getCards();
//   cards.push(cardData);
//   saveCards(cards);

//   createCard(cardData);

//   inp.forEach(input => {
//     if (input.type !== "submit") {
//       input.value = "";
//     }
//   });
// });

// let abcd = document.getElementById("abcd");
// abcd.addEventListener("mouseover", () => {
// abcd.style.backgroundColor = "yellow"
// })
// abcd.addEventListener("mouseout", () => {
//     abcd.style.backgroundColor = "red"
// })

// let abcd = document.getElementById("abcd");
// window.addEventListener("mousemove", (det) => {
//     abcd.style.top = det.clientY + "px";
//     abcd.style.left = det.clientX + "px";
// })

/////////// Event object: /////////////
// The event object is automatically passed to event handler functions and contains information about the event that occurred. Common properties and methods of the event object include:
// 1. target: The element that triggered the event.
// 2. type: The type of event that occurred (e.g., "click", "keydown").
// 3. preventDefault(): method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. (e.g., preventing form submission).
// 4. stopPropagation(): method prevents propagation of the same event from being called. Propagation means bubbling up to parent elements or capturing down to child elements.

// let abcd = document.getElementById("abcd");
// abcd.addEventListener("click", (e) => {
//     console.log(e);
// })

// preventDefault() example
// let link = document.querySelector("a");
// link.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Link click prevented");
// })

// stopPropagation() example
// let outer = document.getElementById("a");
// let inner = document.getElementById("b");
// outer.addEventListener("click", () => {
//     console.log("Outer div clicked");
// })
// inner.addEventListener("click", (e) => {
//     e.stopPropagation(); // Prevents the event from bubbling up to the outer div
//     console.log("Inner div clicked");
// })

//////////////// Event Bubbling and Capturing ////////////////////
// Event Bubbling: JavaScript Event Bubbling is a behavior in which an event triggered on a child (inner) element automatically propagates upward through its parent elements, one by one, until it reaches the top of the DOM (usually document), unless explicitly stopped.
// event capturing is phase 2 bottom -> top

// Event Capturing: JavaScript Event Capturing is a behavior in which an event starts from the top of the DOM (usually document) and travels downward through parent elements until it reaches the target element.
// Event capturing is by default off and we have to start 
// event capturing is phase 1 top -> bottom

// document.querySelector("#nav")
// .addEventListener("click", (e) => {
//     alert("nav clicked");
//     console.log(e.bubbles);
// });

// document.getElementById("grandparent")
//   .addEventListener("click", () => {
//     console.log("Grandparent");
//   }, true); // CAPTURING

// document.getElementById("parent")
//   .addEventListener("click", () => {
//     console.log("Parent");
//   }, true); // CAPTURING

// document.getElementById("child")
//   .addEventListener("click", () => {
//     console.log("Child");
//   }); // BUBBLING (default)

// document.getElementById("parent")
//   .addEventListener("click", () => {
//     console.log("Parent");
//   });

// document.getElementById("grandparent")
//   .addEventListener("click", () => {
//     console.log("Grandparent");
//   });

// let ul = document.querySelector("ul");
// ul.addEventListener("click", (e) => {
//     e.target.classList.toggle("lt");
// });

// Q..........
// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// // bubbling
// btn.addEventListener("click", () => {
//     console.log("buton clicked");
// });
// c.addEventListener("click", () => {
//     console.log("c clicked");    
// }, true);
// b.addEventListener("click", () => {
//     console.log("b clicked");    
// });
// a.addEventListener("click", () => {
//     console.log("a clicked");    
// }, true);

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input", () =>{
//     let left = 20 - inp.value.length;
//     span.innerText = left;
//     if(left < 0){
//         span.style.color = "red"
//     } else {
//         span.style.color = "black"
//     }
    
})