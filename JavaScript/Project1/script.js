const users = [
  {
    name: "Aarav Mehta",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    bio: "Loves morning walks, good coffee, and capturing small moments on camera.",
  },
  {
    name: "Isha Patel",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    bio: "Enjoys baking desserts and trying new recipes on weekends.",
  },
  {
    name: "Rohan Verma",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Music lover who spends evenings with playlists and long drives.",
  },
  {
    name: "isha Sharma",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
    bio: "Believes in slow living, journaling, and peaceful routines.",
  },
  {
    name: "Kabir Singh",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600",
    bio: "Fitness enthusiast who enjoys early workouts and evening stretches.",
  },
  {
    name: "Ananya Gupta",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600",
    bio: "Loves sketching faces and exploring creative ideas.",
  },
  {
    name: "Vikram Rao",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600",
    bio: "Enjoys reading novels and watching late-night movies.",
  },
  {
    name: "Pooja Nair",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600",
    bio: "Travel enthusiast who enjoys discovering hidden cafés.",
  },
];

// ---------------- DOM REFERENCES ----------------

const cardsContainer = document.querySelector(".cards");
const searchInput = document.querySelector(".search");

const errorMsg = document.createElement("p");
errorMsg.textContent = "No user found";
errorMsg.className = "text-gray-400 text-2xl mt-5 hidden";
cardsContainer.after(errorMsg);


// ---------------- RENDER FUNCTION ----------------

function showUser(arr) {

  cardsContainer.innerHTML = "";

  if (arr.length === 0) {
    errorMsg.classList.remove("hidden");
    return;
  } else {
    errorMsg.classList.add("hidden");
  }

  arr.forEach((user) => {

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "bg-img";
    img.src = user.img;

    const glass = document.createElement("div");
    glass.className = "glass-layer";

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, glass, content);
    cardsContainer.appendChild(card);

  });
}


// ---------------- DEBOUNCE FUNCTION ----------------

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// ---------------- SEARCH HANDLER ----------------

const debouncedSearch = debounce(() => {

  const value = searchInput.value.toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(value)
  );

  showUser(filteredUsers);

}, 300);

// ---------------- EVENT LISTENER ----------------

searchInput.addEventListener("input", debouncedSearch);

// ---------------- INITIAL LOAD ----------------

showUser(users);