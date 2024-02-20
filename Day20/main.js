//function can return a function
function outerFunction(){
    function innnerFunction(){
        console.log("Hello i am in innner function");
    }
    return innnerFunction;
}
const ans = outerFunction();
console.log(ans);
ans();
function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
    //yaha ye function return to hoga pr wo aapne sath aapne local memory 
    //ki variables ko sath lekr return hota hai
}
const name1 = printFullName('Praneet','Raj');
name1();
//CLOSERS
//agr koi function kisi function ke andar hai aur agar andar wale
// function ko return krte hai to wo aapne lexical enviroment(Jaha wo function present hai)
//ki variables ho saath lekr retun hoga
//ex1
function hello(x){
    const a = 'varA';
    const b = 'varB';
    return function(){
        console.log(a,b,x);
    }
}
const res = hello('arguments');
res();
//make a function,which gives the aquare of passed arguments
function square(x){
    return x**2;
}
const resSquare = square(4);
console.log(resSquare);
//ex2:-Make a function ehich takes parameter as power,
// and inside it make a function which takes the number to be powered
// function MyFunction(power){
//     return function(number){
//         console.log(number**power);
//     }
// }
// var result = MyFunction(3);//here result is representing the innner function
// var num = result(5);
// var result = MyFunction(2);
// var num = result(5);
// console.log(num);
//we can also do it in other way
// function MyFunction(power){
//     return function cal(number){
//         console.log(number**power);
//     }
// }
// const cal = MyFunction(3);
// const num = cal(5);
// console.log(num);
//
const MyFunction = (power) => (number) =>  number**power;
var result = MyFunction(3);//here result is representing the innner function
var num1 = result(5);
var result = MyFunction(2);
var num = result(5);
console.log(num1);
console.log(num);
// make a function which returns 
function myFunc(name){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log(name,'hi you called me');
            counter++;
        }else{
            console.log(name,'you called me earlier');
        }
    }
}
const myName = myFunc('Praneet');
myName();
myName();
