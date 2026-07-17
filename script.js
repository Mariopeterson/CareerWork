// ============================================================
// Discover Korea — script.js
// Built alongside Noble Desktop "JavaScript for Front-End"
// ============================================================

// ----- Exercise 1A: Fundamentals of JavaScript Code -----
console.log("Welcome to Discover Korea! 대한민국");

// ----- Exercise 1B: The DOM & Getting/Setting Properties -----
// Select an element by id and set its text
const yearSpan = document.getElementById("year");
const today = new Date(); // Exercise 2D: the Date object
yearSpan.textContent = today.getFullYear();

// ----- Exercise 2D: If Else, the Date Object, & Creating Elements -----
const month = today.getMonth() + 1; // getMonth() is 0-11
let seasonNote;
if (month >= 3 && month <= 5) {
  seasonNote = "🌸 Right now it's spring — cherry blossom season is here!";
} else if (month >= 6 && month <= 8) {
  seasonNote = "☀️ Right now it's summer — beach weather on Jeju and festivals everywhere.";
} else if (month >= 9 && month <= 11) {
  seasonNote = "🍁 Right now it's autumn — the mountains are ablaze with fall color.";
} else {
  seasonNote = "❄️ Right now it's winter — ski season in Gangwon and steaming street food.";
}
const noteEl = document.createElement("p");
noteEl.className = "season-note";
noteEl.textContent = seasonNote;
document.getElementById("when-to-go").appendChild(noteEl);

// ----- Exercise 1C: Functions & Event Handlers -----
const siteNav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");

function toggleMenu() {
  siteNav.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", siteNav.classList.contains("nav-open"));
}
navToggle.addEventListener("click", toggleMenu);

// Smooth scrolling for in-page links
function smoothScrollTo(event) {
  const targetId = event.currentTarget.getAttribute("href");
  if (targetId.length > 1 && document.querySelector(targetId)) {
    event.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    siteNav.classList.remove("nav-open"); // close mobile menu after navigating
  }
}
const pageLinks = document.querySelectorAll('a[href^="#"]');
pageLinks.forEach(function (link) {
  link.addEventListener("click", smoothScrollTo);
});
