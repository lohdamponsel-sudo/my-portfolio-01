
// HAMBURGER MENU
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");

  navLinks.classList.toggle("active");
}

// CLOSE MENU AFTER CLICKING A LINK
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("navLinks").classList.remove("active");
  });
});

// CLOSE MENU WHEN CLICKING OUTSIDE
document.addEventListener("click", function(event) {
  const menu = document.getElementById("navLinks");
  const button = document.querySelector(".menu-toggle");

  if (!menu.contains(event.target) &&
      !button.contains(event.target)) {
    menu.classList.remove("active");
  }
});

// AUTOMATIC FOOTER YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

