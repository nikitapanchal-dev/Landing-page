// Navbar toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Button click
document.querySelector(".started-btn").addEventListener("click", () => {
    alert("🚀 Free Trial Started!");
});
