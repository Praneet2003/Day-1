//compilation(code execute ke pehle compilation hoti hai)
//1:) tokenizing/lexing(making code in smaller parts)
//2:) passing(Early error checking) 
//and determining appropriate scope for variable(komsa variabe kaha hai)
//3:) code generation
//then code execute
//agr koi  variable fuction me nhi hai to wo global scope me hota hai
//1:- Compilation phase:-
// early error checking
// determining appropriate scope of variables
//Code execution phase:-
//in js code executes inside execution context
//Global Execution Context
//1:) creation phase(pehle khud bnega)
//2:) code execution phase
console.log(this);
console.log(window);
var firstName = "Praneet";
console.log(firstName);
//example2:-
console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);
function myFunction(){
    console.log("This is my function");
}
var firstName = 'Anshu';
var lastName = 'Kumar';
var fullName = firstName + " " + lastName;
console.log(fullName);
//Hosting 
//calling of function before declaring is called as hosting
//in the case of function expression here myFunx is just acting like a variable
console.log(myFunx);
var myFunx = function(){
    console.log("this is my function");//undefined
}
//hosting by using let
//
//
// console.log(funx1);
// let funx1 = "Praneet";
//Uncaught ReferenceError: Cannot access 'funx1' before initialization
//hosting by using const
// console.log(funx1);
const funx1 = "Praneet";
//JS1.js:46 Uncaught ReferenceError: Cannot access 'funx1' before initialization
//TDZ:- temporal dead zone
//jb tk variable initialize nhi ho jata tb tk wo TDZ me rahega
console.log(funx1);
console.log("After tdz",typeof funx1);
//example:- 3
console.log("Hello world");
let firstName1 = "Mehul"; 
let lastName1 = "Raj";
const myFunction1 = function(){
    let var1 = "first variable";
    let var2 = "second variable";
    console.log(var1);
    console.log(var2);
}
myFunction1();
//FUNCTION EXECUTION CONTEXT:-
let foo = "foo";
console.log(foo);
function getfullname(firstName2,lastName2){
    console.log(arguments);//arguments is an array like object which stores argument in it
    console.log(arguments.length);
    console.log(arguments[0],arguments[1],arguments[2]);//only two arguments are present here
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = firstName2 + " " +lastName2;
    return fullName;
}
const personName = getfullname("Praneet","Raj");
console.log(personName);
//LEXICAL ENVIROMENT & SCOPE CHAIN
const lastName3 = "Ayush";
const printName = function(){
    const firstName3 = "Praneet";
    console.log("lexical enviroment");
    console.log(firstName3);
    console.log(lastName3);
}
printName();
