// // Input and output on website

// console.log("Script is working in diffent file");
// var username = prompt("Give me your username");
// alert("This Script works "+username);

var btnTranslate = document.querySelector("#btn-translate");
var txtarea = document.querySelector("#txtarea");

// console.log(btnTranslate);

btnTranslate.addEventListener("click",function clickeventhandler() {
    console.log("clicked");
})
btnTranslate.addEventListener("click",function valTxtArea() {
    console.log("input "+ txtarea.value);
})