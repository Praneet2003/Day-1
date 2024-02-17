//Object oriented javascript & prototypical
//Methords
//function inside keywords
var person = {
    firstName : "Praneet",
    age: 20,
    about: function(){
//this methord
        console.log(`Person name is ${this.firstName} and my age is ${this.age}`);
        console.log("Person name is praneet and my age is 20");
        //this is like an object
        console.log(this);
        console.log(this.firstName, this.age);
    }
}
person.about();//the  value of this is person here
function personInfo(){
    console.log(`Person name is ${this.firstName} and my age is ${this.age}`);
}
const person1 = {
    firstName : "Ayush",
    age : 20,
    about : personInfo
}
const person2 = {
    firstName : "Anshu",
    age : 20,
    about : personInfo
}
const person3 = {
    firstName : "Mehul",
    age : 20,
    about : personInfo
}
person1.about();//the value of this is person1 here
person3.about();//the value of this is person2 here
person2.about();//the value of this is person3 here
//personInfo();
//
//
//WINDOW OBJECT IN JavaScript
console.log(this);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window);
console.log(window === this);//true
function myFunc(){
    console.log(this);
}
window.myFunc();//adding myFunc to window object
//gives window object which contains myfuct in it.
//
//
//call method
function hello(){
    console.log("hello world");
}
hello.call();//hello world
const user1 = {
    firstName: "Praneet",
    age : 8,
    about: function(instrument,Musician){
        console.log(this.firstName, this.age,`his fav instrument is ${instrument} and fav musician is ${Musician}`);
    }
}
const user2 = {
    firstName: "Mehul",
    age : 8,
}
user1.about.call(user1);//here inside the paranthesis() we can assign that which one is this object here
//passing arguments in function
user1.about.call(user2,"gutiar","arijit singh");
//
//apply method(Almost similar to call)
user1.about.apply(user1,["gitar",'vishal mishra']);
//
//
//bind method
//bind methord returns a function 
const bindFunc = user1.about.bind(user1,"gitar","shreya ghosal");
bindFunc();
//don't do this mistake
//user1.about();
const myFunc1 = user1.about.bind(user1,"voilin","Arunita kanjilal");
myFunc1();
//this inside arrow function
//arrow function aapna this nhi hota, uska this surrondings me hota hai
const user3 = {
    firstName: "Anshu",
    age: 20,
    about: ()=> {//arrow function aapni this surronding me ek level  upar se lega
         console.log(this);//window
         console.log(this.firstName,this.age);
       
    }
}
user3.about.call(user3);//undefined undefined
//functions to create multiple objects
const useri = {
    firstName: "Mehul",
    age : 20,
    email : "rajmehul23@gmail.com",
    address: "Karhariya road banka,pokhari gali, near kali maindir",
    about: function(){
        return `${this.firstName} is ${this.age} years`;
    },
    is18 : function(){
        return this.age>=18;
    } 
}
const aboutuser = useri.about();
console.log(aboutuser);

