//reusable function in JavaScript
function sum(a,b){
    return a+b;
}
console.log(sum(5,6));
//even and odd number
function isEven(a){
    if(a%2 === 0){
        return true;
        //it is not necessary to add else,we can also directly use 
        //}
        //return false
    }else{
        return false;
    }
}
const returnedValue = isEven(9);
console.log(returnedValue);
function firstString (firstString){
    return firstString[0];
}
console.log(firstString('Nikita'));
 