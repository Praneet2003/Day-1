//make a function with takes elements of an array with index 
//print the element by multiplying it with 2
const numbers = [4,2,5,8];
function multiplyBy2(number,index){
    console.log(`Index is ${index} and number is ${number*2}`);
}
//for(let i =0 ; i< numbers.length; i++){
//    multiplyBy2(numbers[i],i);
//}
//doning the same thing using ForEach methord
//for each methord makes our task easy we dont need to add for loop here
numbers.forEach(multiplyBy2);//it also works as a loop
//for each using anomous function or callback function
const integer = [1,2,3,4,5,6,,7];
integer.forEach(function(integer,index){//here the function is an anamouus function.
    console.log(`integer is ${integer*2} and index is ${index}`);
})
integer.forEach(function(integer){
    console.log(integer*3);
})
//using for each loop print the firstName to the console
var users = [
    {firstName: "praneet", age: 20},
    {firstName: "mehul", age: 20},
    {firstName: "ayush", age:19},
]//function maiking  inside foreach
//users.forEach(function(user){
//    console.log(`${user.firstName} best friends`);
//})
//Arrow function using with for each
users.forEach((user) =>{
    console.log(user.firstName);
})
//map methord(MOST IMPORTANT METHORD)
const WholeNumbers=[3,4,5,6,7,8];
const square = function(WholeNumber){
    return WholeNumber*WholeNumber;//Agar hm yaha pe direct console.log(WholeNumber*WholeNumber);
    //kr dete to ye print to ho jata console pe lekin error dega
    //i.e It is very much important to use return;
}
//
//map function always returns an array
//
//
//
//function making inside map
//const newWholeNumber = WholeNumbers.map(square);
//const newWholeNumber = WholeNumbers.map(function(number){
//    return number*number;
//});
//console.log(newWholeNumber);
//map using arrow function
const newWholeNumber = WholeNumbers.map((number, index)=> {
    return `index: ${index} ${number * number}`;
});
console.log(newWholeNumber);
//real life examples of map methord
var users = [
    {firstName: "praneet", age: 20},
    {firstName: "mehul", age: 20},
    {firstName: "ayush", age:19},
]
const UserNames= users.map((user)=>{
    return user.firstName;
user.age;
});
console.log(UserNames);
//filter methord
const Numbers = [1,3,2,6,4,8,7];
//if have to filter all odd and even no from arrays
//
//
//const isEven = function(number){
//    return number%2===0;
//}
//fiter returns boolean values
//using arrow function 
const EvenNumbers = numbers.filter((number)=>{
    return number%2===0;
});
console.log(EvenNumbers);
//reduce methord
// for eg we have AIM:- print the sum of all elements of an array
const RealNumbers = [1,2,3,4,5];
const sum = RealNumbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0);//here 0 is the initial value.
console.log(sum);
//accumulator        currentvalue        return
//1                  2                   3
//3                  3                   6
//6                  4                  10
//10                 5                  15
//Output: 15
//eg1:- let us assume an e-commerce website of a customer 
//who added items to the cart, we need to add the price of all items and diplay the sum to user
const UserCart = [
    {productId: 1, productName: "mobile" ,price: 12000},
    {productId: 2, productName: "tab" ,price: 29000},
    {productId: 3, productName: "laptop" ,price: 45000},
]
const Total = UserCart.reduce((Totalprice, currentPrice)=>{
    return Totalprice + currentPrice.price;//yaha pe currentprice.price karna pda kyuki hme object ke andar me se price chahiye thi
    //aur totalprice me .price nhi kra kyuki yha pe ye returned value hai as referred to the previous example
},0);

console.log(Total);
//totalprice               currentvalue             return
//0                         {}                      12000
//12000                     29000                    
//                          45000                   86000
//Sort methord
//sort meaning:- arrangement in assending or descending order
//eg:- 5,1200,400,3000,9
//assending short:- 5,9,400,1200,3000
//forEach,filter,reduce do not change the array 
//But Sort methord change the array
//ASCII code

//Here are the ASCII codes for the digits 0 to 9:

//0: 48
//1: 49
//2: 50
//3: 51
//4: 52
//5: 53
//6: 54
//7: 55
//8: 56
//9: 57
/*
Here are the ASCII codes for the uppercase letters 'A' to 'Z':

'A': 65
'B': 66
'C': 67
'D': 68
'E': 69
'F': 70
'G': 71
'H': 72
'I': 73
'J': 74
'K': 75
'L': 76
'M': 77
'N': 78
'O': 79
'P': 80
'Q': 81
'R': 82
'S': 83
'T': 84
'U': 85
'V': 86
'W': 87
'X': 88
'Y': 89
'Z': 90*/ 
/*Here are the ASCII codes for the lowercase letters 'a' to 'z':

'a': 97
'b': 98
'c': 99
'd': 100
'e': 101
'f': 102
'g': 103
'h': 104
'i': 105
'j': 106
'k': 107
'l': 108
'm': 109
'n': 110
'o': 111
'p': 112
'q': 113
'r': 114
's': 115
't': 116
'u': 117
'v': 118
'w': 119
'x': 120
'y': 121
'z': 122*/
//eg:-
const integers = [5,9,1200,400,3000];
//javaScript es array ko as a string dekh paa rha hai
//["5","9","1200","400","3000"]
//sorting is done according to ASCII code of first character
[53,57,49,52,51]
integers.sort();
console.log(integers);
//output:-[1200, 3000, 400, 5, 9]
//it is not sorting according to numbers
//it is sorting according to the string(ASCII code of first character);
const userName = ['praneet','Ayush','Mehul'];
userName.sort();
console.log(userName);
//sorting of capital alphabets occurs first


