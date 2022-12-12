const header = document.querySelector(".header");
const nav = document.querySelector(".header nav");
const menuIcon = document.querySelector("nav .menu-icon");
const searchBar = document.querySelector(".mobile-search-container .search-bar");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");
//const menu = document.querySelector(".menu"); è già inizializzato nel file toggle-search-container.js

menuIcon.addEventListener("click", function() 
{
    header.classList.toggle("active");
});

searchInput.addEventListener("click", function()
{
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    menu.classList.add("move-down");
});

cancelBtn.addEventListener("click", function()
{
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    menu.classList.remove("move-down");
});