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
console.log(btnTranslate);

var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

//temp1.addEventListener('click', function eventHandler() { console.log('clicked')})  - tried in console
function clickHandler() {
  //create a function to ensure it can be called later to an event
  console.log("Clicked!"); //define what the function will do when it's called in the second fucntion!
  console.log("input", txtInput.value);
}
btnTranslate.addEventListener("click", clickHandler);

var outputDiv = document.querySelector("#output-div");
console.log(outputDiv);
outputDiv.innerText = "Isha Arora";

//function clickHandler() {
//outputDiv.innerText = "blahblahblah" + txtInput.value;
//}

/*document.querySelector("textarea");
document.querySelector(".btn-primay");
document.querySelector("#input-btn");
document.querySelector(input[name = "translator"]);*/
