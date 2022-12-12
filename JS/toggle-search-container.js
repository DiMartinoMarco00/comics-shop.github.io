const menu = document.querySelector(".menu");
const searchIcon = document.querySelector(".navbar .menu #search");
const closeIcon = document.querySelector(".search-container #close");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchIcon.addEventListener("click", function()
{
    menu.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
});

closeIcon.addEventListener("click", function()
{
    menu.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", function()
{
    menu.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
});