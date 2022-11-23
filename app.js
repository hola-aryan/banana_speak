var btnTranslate = document.querySelector("#btn-translate");
var txtarea = document.querySelector("#txtarea");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return serverUrl+ "?text="+text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with Server");
}

 function clickhandler(){
    var inputText=txtarea.value;

    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputDiv.innerText = translatedText;
    })
 };

 btnTranslate.addEventListener("click", clickhandler)
 
// // Input and output on website

// console.log("Script is working in diffent file");
// var username = prompt("Give me your username");
// alert("This Script works "+username);


//  For challenge
// var txtarea = document.querySelector("textarea");
// var txtarea = document.querySelector(".btn-primary");
// var txtarea = document.querySelector("#input-btn");
// var txtarea = document.querySelector("input[name='translator']");

// console.log(btnTranslate);