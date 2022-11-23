var btnTranslate = document.querySelector("#btn-translate");
var txtarea = document.querySelector("#txtarea");
var outputDiv = document.querySelector("#output");

outputDiv.innerText="Tanay Pratap";

btnTranslate.addEventListener("click",function clickeventhandler() {
    console.log("clicked");
})
btnTranslate.addEventListener("click",function valTxtArea() {
    console.log("input "+ txtarea.value);
 })

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