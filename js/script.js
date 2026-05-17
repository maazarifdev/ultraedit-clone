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
});


// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLi = document.querySelector(".li");
const navButton = document.querySelector(".button");

hamburger.addEventListener("click", function () {
  // Toggle open class on hamburger (animates to X)
  hamburger.classList.toggle("open");

  // Toggle nav items visibility
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
