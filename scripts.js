const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const menu = document.getElementById("nav-menu");

function menuToggle() {
    menu.classList.toggle("nav-visible");
    openMenuBtn.classList.toggle("btn-hide");
    closeMenuBtn.classList.toggle("btn-hide");
}

openMenuBtn.addEventListener("click", menuToggle);
closeMenuBtn.addEventListener("click", menuToggle);
menu.addEventListener("click", menuToggle);