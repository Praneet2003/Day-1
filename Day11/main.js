//arrays in js
let fruits = [1,"apple",1,"mango",2, "grapes"];//refrence  data type
//modifing elements of fruits
fruits[0] = 0;
console.log(fruits);
console.log(typeof fruits);
//to check array 
console.log(Array.isArray(fruits));
//adding elements to array
fruits.push("bananas");
console.log(fruits);
//removing elemnts form array
fruits.pop();
console.log(fruits);
//adding items in array from front side
//unshift
fruits.unshift("Banana");
console.log(fruits);
//removing elements form an array from starting
fruits.shift();
console.log(fruits);
//push & pop are faster as compared to shift & unshift
//permitive data type
let num1 = 4;
let num2 = num1;
console.log("value of num1",num1);
console.log("value of num2",num2);
num1++;
console.log("after increment");
console.log("value of num1",num1);
console.log("value of num2",num2);
//refrence data types
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3","item4");
console.log("array1",array1);
console.log("array2",array2);
//cloning of array
//cloning means making copies 
//m-1
let array4 = ["item1", "item2"];
let array3 = ["item1",'item2'];
console.log(array1 === array2);
//m2 called as slice methord
array3 = array4.slice(0);
array4.push("item3");
console.log(array4 === array3);
//m3 called as concat methord
array3 = [].concat(array4);
array4.push("item5");
console.log( array4 === array3);
//m-4 called as spread methord
array3 = [...array4];
console.log( array4 === array3);