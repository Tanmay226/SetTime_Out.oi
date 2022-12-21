//way to print in javascript 
// javascript console API
/* console.log("Hallo World");//Hallo World
 console.warn("this is warning");//this is warning -- print in yellow color
 console.error("this is an Error");// this is an Error--- print in red color
 console.clear();// console.clear is function thats use to clear the console
 console.assert(4==6);*/  /* */ //is used to multi line comments
// Assertion failed: console.assert
// console.assert()-- use to any methods that true  or false

/*multi
 line 
 comment*/

//2) what is variable
var number1 = 34;
var number2 = 57;
console.log(number1 + number2);

//3) data type in javascript

//number
var number1 = 34;
var number2 = 57;
//string
var str1 = "this is a string";
var str2 = "this is also string";
//object
var marks = {
    ravi: 58,
    subham: 48,
    harry: 99
}
// console.log(marks);//{ravi: 58, subham: 48, harry: 99}
// console.log(str1);//this is a string
// console.log(str1,str2);//this is a string this is also string
console.log(marks, str1, str2, number1, number2);
//also work this type of decoration
// { ravi: 58, subham: 48, harry: 99 } this is a string this is also string 34 57

//Booleans  
//is type of object 
var a = true;
var b = false;
console.log(a, b);//true false

//var und = undefined 
// undefined

var und = undefined;
console.log(und);// undefined

//null--> is pre define something thats is nothing 
var n = null;
console.log(n);//null


/*At a very high level , there are two types of data in javascript
1. primitive data type: undefined, null, number, string, object, Boolean, Symbol,
2. Reference data types : Arrays and object;
*/

var arr = [1, 2, "bablu", 4, 5, 6];
console.log(arr[2]);//bablu

// //we can also javascript to style web page
// let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow"


// //selecting using query

// sel = document.querySelector('.cointainer');
// console.log(sel);

// sel = document.querySelectorAll('.cointainer');
// console.log(sel);

// //events in javascript
function clicked() {
    console.log('the button was clicked');
}//we use onclick function to click the document

// window.onload=function(){
//     console.log('The document was loaded');
// }//this function we can used to document loaded

// firstContainer.addEventListener('click',function(){
//     console.log("click on container")
// })//click on container

// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// })//very usefull and amezing trick //mouse on container

// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out container")
// })//very usefull and amezing trick //mouse out container

// firstContainer.addEventListener('mouseup', function () {
//     console.log("mouse up clicked on container")
// })//mouse up clicked on container

// firstContainer.addEventListener('mousedowm', function () {
//     console.log("mouse dowm clicked on container")
// })

// firstContainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("click on container")
// })//We have clicked

let prevHTML= document.querySelectorAll('.container')[1].innerHTML

firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML
    console.log("mouse up clicked on container")
})//mouse up clicked on container

firstContainer.addEventListener('mousedowm', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
    console.log("mouse dowm clicked on container")
})

