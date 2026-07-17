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

// ----- Exercise 2A: Arrays, the Math Object, & a Random Fact -----
const koreaFacts = [
  "Hangeul, the Korean alphabet, has just 24 letters — designed in 1443 so that anyone could learn to read.",
  "The KTX high-speed train covers Seoul to Busan (about 325 km) in under 3 hours.",
  "Kimchi has more than 200 documented regional varieties.",
  "Jeju Island's haenyeo — free-diving women — harvest seafood well into their 80s.",
  "South Korea has one of the world's fastest average internet speeds.",
  "Taekwondo, Korea's national martial art, is practiced in more than 200 countries.",
  "Seoul's subway system carries roughly 7 million passengers every day.",
  "Korea has four UNESCO-listed palace and fortress complexes in the Seoul area alone."
];
const factText = document.getElementById("fact-text");

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * koreaFacts.length);
  factText.textContent = koreaFacts[randomIndex];
}
document.getElementById("fact-btn").addEventListener("click", showRandomFact);
showRandomFact(); // show one as soon as the page loads

// ----- Exercises 2B & 3A: JavaScript Objects + For Loops -----
// All region info lives in one array of objects (the "single source of truth")
const regions = [
  { className: "gyeonggi", name: "Seoul & Gyeonggi",
    desc: "The capital region: palaces, markets, and the pulse of the nation.",
    highlight: "Don't miss: Gyeongbokgung Palace, Bukchon Hanok Village, and the markets of Myeongdong." },
  { className: "gangwon", name: "Gangwon",
    desc: "Alpine peaks and ski slopes; host of the 2018 Winter Olympics.",
    highlight: "Don't miss: Seoraksan National Park and the slopes of Pyeongchang." },
  { className: "chungch", name: "Chungcheong",
    desc: "The tranquil heartland of hot springs and heritage towns.",
    highlight: "Don't miss: Onyang's hot springs and the Baekje-era sites of Buyeo." },
  { className: "jeolla", name: "Jeolla",
    desc: "The soul of Korean cuisine and the storytelling song of pansori.",
    highlight: "Don't miss: Jeonju Hanok Village — the birthplace of bibimbap." },
  { className: "gyeongsang", name: "Gyeongsang",
    desc: "Ancient Silla capital Gyeongju and the seaside city of Busan.",
    highlight: "Don't miss: Bulguksa Temple in Gyeongju and Busan's Haeundae Beach." },
  { className: "jeju", name: "Jeju Island",
    desc: "A volcanic isle of waterfalls, beaches, and haenyeo sea divers.",
    highlight: "Don't miss: Hallasan volcano and the Seongsan Ilchulbong sunrise peak." }
];

// Build the region grid with a for loop instead of hardcoded HTML
const koreaMap = document.getElementById("korea-map");
for (let i = 0; i < regions.length; i++) {
  const region = regions[i];
  const card = document.createElement("div");
  card.className = "region " + region.className;

  const title = document.createElement("h3");
  title.textContent = region.name;
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = region.desc;
  card.appendChild(desc);

  koreaMap.appendChild(card);
}

// ----- Exercise 3B: Dynamically Changing Content with Custom Objects -----
const regionSelect = document.getElementById("region-select");
for (let i = 0; i < regions.length; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = regions[i].name;
  regionSelect.appendChild(option);
}

const regionDetail = document.getElementById("region-detail");
function showRegionDetail() {
  const region = regions[regionSelect.value];
  regionDetail.innerHTML =
    "<h3>" + region.name + "</h3>" +
    "<p>" + region.desc + "</p>" +
    "<p class=\"highlight\">" + region.highlight + "</p>";
}
regionSelect.addEventListener("change", showRegionDetail);
showRegionDetail(); // populate with the first region on load
