// ===== SWIPER =====
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Smooth slide transition
  speed: 700,
  effect: "slide",
});


// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLi = document.querySelector(".li");
const navButton = document.querySelector(".button");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  navLi.classList.toggle("nav-open");
  navButton.classList.toggle("nav-open");
});

// Close menu when any nav link is clicked
const navLinks = document.querySelectorAll(".li a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    hamburger.classList.remove("open");
    navLi.classList.remove("nav-open");
    navButton.classList.remove("nav-open");
  });
});


// ===== STICKY NAV SHADOW =====
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// ===== SCROLL REVEAL =====
// Add reveal classes to elements in HTML via JS so it works without touching HTML
const revealSelectors = [
  // Page section headings
  { selector: ".service",     cls: "reveal" },
  { selector: ".text-pg3",    cls: "reveal" },
  { selector: ".text-pg4",    cls: "reveal" },

  // Feature boxes — staggered
  { selector: ".box",         cls: "reveal" },

  // Cards
  { selector: ".card",        cls: "reveal-left" },
  { selector: ".card2",       cls: "reveal-right" },
  { selector: ".card3",       cls: "reveal-left" },

  // Feature grid items
  { selector: ".show",        cls: "reveal" },

  // Logo slider
  { selector: ".logo-slider", cls: "reveal" },

  // Footer
  { selector: ".footer-left",  cls: "reveal-left" },
  { selector: ".footer-right", cls: "reveal-right" },
];

// Apply reveal base classes
revealSelectors.forEach(function (item) {
  document.querySelectorAll(item.selector).forEach(function (el) {
    el.classList.add(item.cls);
  });
});

// IntersectionObserver to trigger .visible when element enters viewport
const observerOptions = {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Once revealed, stop watching
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(function (el) {
  observer.observe(el);
});


// ===== STAGGERED BOX REVEAL =====
// Give each .box an increasing delay so they cascade in
document.querySelectorAll(".box").forEach(function (box, index) {
  box.style.transitionDelay = (index * 0.09) + "s";
});

// Same for .show (feature cards)
document.querySelectorAll(".show").forEach(function (show, index) {
  show.style.transitionDelay = (index * 0.07) + "s";
});
