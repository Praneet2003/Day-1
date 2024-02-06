//script tag inside header must have  defer in it
//Data type conversion.
//Convert number to str:
let age = 22 + '';//add an empty str
console.log(typeof age);
//conversion of str to number
 age = +'20';
 console.log(typeof age);
 //String concatination
 let str1 = "17";
 let str2 = "30";
 let newString = str1+str2;
 console.log(newString);
let firstName = "Praneet";
console.log("My name is " + firstName + " And my age is "+ age);
//another way by using template string and back tick(remember ecs key)
console.log(`MY name is ${firstName} and my age is ${age}`);
//null datatype
let myVar = null;
console.log(myVar);
console.log(typeof myVar);
console.log("The datatype of null is showing as Object due to the bug in Javascript");
//BigInt newly introduced in js
let myNum = BigInt(46692739875486693649268342708);
// we can also use let myNum = 583465276586453870832n;
let someNum = 123n;
console.log(myNum + someNum);
console.log(typeof myNum);
//Booleans and comparision operator
let num1 = 7;
let num2 = '17';
console.log(num1 !== num2);
console.log(num1 === num2);
console.log(num1 != num2);
//if else statement
if(num1>=num2){
    console.log( num1 +" is greater than or equal to "+ num2);
}
else{
    console.log(num1 + " is smaller than " +num2);
}
//nested if else:
let winningNumber = 19;
let UserGuess = +prompt("Enter your guess no:-");//prompt takes input in  the form of string
if(UserGuess === winningNumber){
    console.log("you win");
}else{
    if(UserGuess < winningNumber){
        console.log("too low");
    }
    else{
        console.log("too high");
    }
}
//else if
