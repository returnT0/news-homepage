const menuBtn = Array.from(document.querySelectorAll(".menu-btn"));
const header = document.querySelector("header");
const nav = document.querySelector(".nav ul")

for (btn in menuBtn) {
    menuBtn[btn].onclick = toggleMenu;
}

function toggleMenu() {
    header.classList.toggle("show-menu");
    nav.classList.toggle("active")
}