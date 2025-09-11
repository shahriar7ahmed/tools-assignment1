// Select elements
const menuIcon = document.querySelector(".menu-icon i");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector("header");

// Toggle mobile menu
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Sticky navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // Close menu when scrolling
  navLinks.classList.remove("show");
});
