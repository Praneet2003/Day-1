//hosting js
console.log(somevariables);
someFunction();
function someFunction(){
    console.log("from somefunction",somevariables);
}
var somevariables = "devsnest";
someFunction();
var myName = "Praneet";
function printName(){
    console.log(myName);
    printAnotherName();
}
function printAnotherName(){
    var myName = "john";
    console.log(myName);
    printSomeOtherName();
}
function printSomeOtherName(){
    var myName = "Jane";
    console.log(myName);
}
console.log(myName);
printName();