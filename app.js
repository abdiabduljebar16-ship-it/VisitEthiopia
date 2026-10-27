const button = document.querySelector(".expandHomeBar");
const menu = document.querySelector(".menu-bar");

button.addEventListener("click", ()=> {
    menu.classList.toggle("hidden");
});