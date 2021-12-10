// JavaScript Document
var button = document.querySelector("h2");

function komTevoorschijn(){
    let hetMenu = document.querySelector("nav");
    hetMenu.classList.toggle("toonNav");
}

button.addEventListener("click", komTevoorschijn);



var button = document.querySelector(".darkmodebody")

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

button.addEventListener("click", myFunction)