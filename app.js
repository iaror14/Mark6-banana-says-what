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

var outputDiv = document.querySelector("#output-div");
console.log(outputDiv);

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}

//temp1.addEventListener('click', function eventHandler() { console.log('clicked')})  - tried in console
function clickHandler() {
  //create a function to ensure it can be called later to an event
  var inputText = txtInput.value; //wasn't working becuase this was outside of the function, should have been inside only!
  //console.log("Clicked!"); //define what the function will do when it's called in the second fucntion!
  fetch(getTranslation(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    });
}
btnTranslate.addEventListener("click", clickHandler);

//Exercise responses!
/*document.querySelector("textarea");
document.querySelector(".btn-primay");
document.querySelector("#input-btn");
document.querySelector(input[name = "translator"]);*/
