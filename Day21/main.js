//DOM
//document object model
//
//browser will see our html file and make an object {},which is known as document
//then after this document object will be added to the window Object of javaScript 
//only because of this doument object browser is able to show us the webpages.
console.log(window.document);//its not necessary to write window here beacause it is already present in javascript.
console.dir(window.document);//gives output as javaScript representation
//
//Element Selection
//1:) select element by using getElementById(in this method we can only select the element using id)
var element= document.getElementById("main-heading");
console.log(element);
console.dir(document.getElementById("main-heading"));
//2:) query selector
// isme hm kuch vi select kr skte hai (id,class,button)
var mainHeading = document.querySelector("#main-heading");//id select krne ke liye simply aaghe # lga denge jaise css me krte hai
console.log(mainHeading);
var header = document.querySelector(".header");
console.log(header);
//if there are several items with same class 
var navItem = document.querySelector(".nav-item");
console.log(navItem);//jo element sbse pehle hoga ye bs usko select krke baki ko chor dega
////if there are several items with same class aur agar hme sare items chahiye then hm use krenge
//3:) querySelectorAll
var navItem = document.querySelectorAll(".nav-item");
console.log(navItem);//it will give all the elements with class nav-item
//
//changing the text of html using javascript
var mainHeading = document.getElementById('main-heading');
//
//textContent Property:)
console.log(mainHeading.textContent);//it will give all the text of this id
//now we can also change the text 
mainHeading.textContent = "Hello i am Praneet Raj!(txt changed)";
console.log(mainHeading.textContent);
console.log(mainHeading.textContent);
//on website it is not showing the txt wraped in span tag
//but it is giving the complete text content including span tag text in output 
//innerText:)
console.log(mainHeading.innerText);
//while it is not showing the text wraped in span tag in output
//
//
//change style of element using js
var mainHeading = document.querySelector("div.headline h1");
// console.log(mainHeading.style);
mainHeading.style.color = 'orange';
mainHeading.style.backgroundColor = 'black';
mainHeading.style.border = '2px solid red';
//we cannot write background-color beacuse it is an error in js
//so we use Camel case in this case.
console.log(mainHeading.textContent);//color changed to orange and backgroundColor to black.