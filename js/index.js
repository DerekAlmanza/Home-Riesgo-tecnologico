// Navbar and toggle menu.
const toggleMenu = document.getElementById("toggleMenu");
const navigation = document.getElementById("navigation");

const header = document.querySelector("header");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
