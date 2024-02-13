//iterables
//jinpe hm for of loop lga skte hai 
//string and arrays itterables hai
const firstName = "Praneet"
for(let char of firstName){
    console.log(char);
}
const items = ['item1','item2','item3'];
for (let item of items){
    console.log(items);
}
//object is not itterable
//array like object
//jinke pass length property hai aur jinke hm index acess kr skte hai
//eg:- string
console.log(firstName.length);
console.log(firstName[3]);
//sets(it is also itterable)
//sets stores Data (may be of different DataTypes)
//sets also have its own methods
//no index based acess, order is not gauranted
//unique items only (no duplicate allowed)
const numbers = new Set([1,2,3]);
console.log(numbers);
//string in set
const strSet = new Set("abc");
console.log(strSet);
//set can be empty
 const EmptySet = new Set();
 EmptySet.add(1);
 EmptySet.add(2);
 EmptySet.add(2);//it will be added only once
 EmptySet.add(items);//items ia an array here(not be added twice like this)
 EmptySet.add([1,2,3,4,5,6,7,8,9,10]);//we can add two same arrays using []
 EmptySet.add([1,2,3,4,5,6,7,8,9,10]);//the array is made new at different memory location
 EmptySet.add(3);
 EmptySet.add(4);
 EmptySet.add(5);
 EmptySet.add(6);
 //to find an item present in set or not by Using (.has)
 if(EmptySet.has(1)){
    console.log("1 is present");
 }else{
    console.log("1 is not present");
 }
for (let EmptySets of EmptySet){
    console.log(EmptySets);
}
 console.log(EmptySet);
 // for eg we have an array having duplicates then filter out the unique elements out of the array
 const MyArray = [1,2,4,4,5,6,5,6];
 const UniqueElements = new Set(MyArray);
 console.log(MyArray);
 console.log(UniqueElements);
 //finding the length of array
 let length = 0;
 for (let element of UniqueElements){
    length++;
 }
 console.log(length);
 //Object Literals(not iterable)
 //we can't use for of loop in but we can use for in loop 
 //key --> string
 //key --> symbol
 const person = {
    firstName: "Praneet",
    age: 7,
    1: "one"//here 1 is also considered as string 
 }
 console.log(person[firstName]);
 console.log(person.firstName);
 console.log(person[1]);
 for (let key in person){
    console.log(typeof key);
 }
 //Map object(it is iterable)
 //it also stores key value pair
 //order is fixed
 const person1 = new Map();
 //adding key value pair in map
 //inmap we can use key as per our choice
 person1.set('firstName','Praneet');
 person1.set('age', 20);
 person1.set('intrest', 'driving');
 person1.set(1,'one');
 person1.set([1,2,3],'onetwothree');//we can add anything in key
 person1.set({1: 'one'},'onetwothree');//we can also add string literals in map
 console.log(person1);

//to acess the value of a key in map
//get method
console.log(person1.get('firstName'));
//printing all the keys of map
//keys method
console.log(person1.keys());// output as a MapIterator {'firstName', 'age', 'intrest', 1}
for(let key of person1.keys()){
    console.log(key,typeof key);
}
for(let [key,value] of person1){
    console.log(key);
    console.log(Array.isArray(key));
    console.log(key,value);//we cannot write it just by adding comma in between it is necessary to destructure
}
//we can add key value pairs directly in map as follows
var person2 = new Map([['fristName','praneet'],['age',20],['likes','driving']]);
console.log(person2);
//make a object and add some additonal keys in it using map and store it in map
const person3 = {
    id: 12324649,
    firstName: 'praneet'
}
const person4 = {
    id: 12324768,
    firstName: 'Mehul'
}
const extrainfo = new Map();
extrainfo.set(person3,{age: 20, gender: 'male'});
extrainfo.set(person4,{age: 21, gender: 'male'});//here the additional key values are {age: 20, gender: male}
console.log(person3);
//if we only need only to acess the id 
console.log(person3.id);
//acess age from extrainfo 
console.log(extrainfo.get(person3).age);
console.log(person4);
console.log(extrainfo.get(person4).gender);
//cloning using object.assign
//heap memory
const Obj={
    key1: 'value1',
    key2: 'value2'
}
//obj and obj2 will have the same memory due to Heap
//all elements of obj is in obj2
//if we want that the new added key must not be in obj2
//so we will use spread operator
//const Obj2 = {...Obj};
//Another methord(used in old times)
const Obj2 = Object.assign({}, Obj);//this also works same as spread method
Obj.key3 = 'value3';
console.log(Obj);
console.log(Obj2);
//Optional chaining(?.)
//mostly used in react
const user = {
    firstName: "Praneet",
    //address: {houseNumber: 12324}
}
console.log(user.address);//address is already an object
//if we want to fetch the house no 
//console.log(user.address.houseNumber);//if we comment out the address key pair 
//from user object then it gives an error as follows
//
//Uncaught TypeError: Cannot read properties of undefined (reading 'houseNumber')
//we can have a value just after the execution in react 
//so we use optional chaining ?.
console.log(user.address?.houseNumber);
//gives output as undefined