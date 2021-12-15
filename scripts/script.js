//De code van het manu
//Deze code komt van de opdracht over een uitklapbaar menu
var button = document.querySelector("h2");

function komTevoorschijn(){
    let hetMenu = document.querySelector("nav");
    hetMenu.classList.toggle("toonNav");
}

button.addEventListener("click", komTevoorschijn);



//De code voor de darkmode
//Bron: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp (heb alleen het javascript van deze bron, de rest wat hoort bij darkmode
//komt van het filmpje dat als bron staat bij de css pagina)
var button = document.querySelector(".darkmode")

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

button.addEventListener("click", myFunction)



//Bron: https://www.w3schools.com/jsref/event_onsubmit.asp
//Hierdoor wordt er een melding verzonden als je op de submit knop drukt
function Verzend() {
    alert("Je vraag is bij ons ontvangen. Wij reageren zo snel mogelijk.");
}