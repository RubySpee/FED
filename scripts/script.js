// JavaScript Document
var button = document.querySelector("h2");

function komTevoorschijn(){
    let hetMenu = document.querySelector("nav");
    hetMenu.classList.toggle("toonNav");
}

button.addEventListener("click", komTevoorschijn);