/*alert("This script works!");
var username = prompt("What is your name?");
alert("I hope it works! " + username);
//input
var click = prompt("What is username?");
//processing
var welcomeMessage = "It works! " + click;
//output
alert(welcomeMessage);*/
var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", clickHandler());
function clickHandler() {
  console.log("Clicked!");
}