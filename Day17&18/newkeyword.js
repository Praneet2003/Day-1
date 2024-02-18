//NEW KEYWORD
// function createUser(firstName,age){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }
// // const user1 = new createUser("Praneet",20);
// console.log(user1);
//new keyword
/////////////// 1:) yaha pe ye ek empty object create kr rha hai => this={}
///////////////////2:)return this
//////////////////////////3:) ye khud se hi link bna lega proto me jaise krte they
// console.log(user1.about());
//////////////////// using new keyword in this below code 
/////////////////////////and Improvising it
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years`;
// };
// createUser.prototype.is18 = function(){
//     return this.age>=18;
// };
// createUser.prototype.sing = function(){
//     return 'toon na na na la la la';
// };
// //constructor function
// function createUser(firstName,lastName,age,email,address){
//     /*user*/this.firstName = firstName;//yaha pe this ek empty object{} hai i.e prototype
//     /*user*/this.lastName = lastName;
//     /*user*/this.age = age;
//     /*user*/this.email = email;
//     /*user*/this.address = address;
//     //return this; //new keyword khus se hi return kr deta hai
// }
// const user1 = new createUser('anshu','chourasia',20,'anshukumarchourasia2911','bihar');//ye new yaha pe khud se hi link bna lega proto me jaise krte they
// const user2 = new createUser('Mehul','lala',20,'meh@gmail.com','bihar');
// const user3 = new createUser('Ayush','gupta',13,'ayu@gmail.com','bihar');
// console.log(createUser.prototype);
// console.log(user2.about());
// console.log(user3.about());
// console.log(user2.is18());
// console.log(user3.is18());
//HAS OWN PROPERTY
// for(let key in user1){
//     console.log(key);//this is printing all keys in function constructor + keys in prototype 
//     //if we dont want to show the prototype key then we use HAS OWN FUNCTION
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
//CLASSES IN JAVASCRIPT
//without new keyword we can't call class
class createUser{
    constructor(firstName,lastName,age,email,address){
        console.log("Constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years`
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return 'toon na na na la la la';
    }
}
const user1 = new createUser('anshu','chourasia',20,'anshukumarchourasia2911','bihar');//ye new yaha pe khud se hi link bna lega proto me jaise krte they
const user2 = new createUser('Mehul','lala',20,'meh@gmail.com','bihar');
const user3 = new createUser('Ayush','gupta',13,'ayu@gmail.com','bihar');
console.log(user1.firstName,user1.about());
console.log(user2.is18());
console.log(Object.getPrototypeOf(user2));
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} whose age is ${this.age} year eats fruits`;
    }
    isSupercute(){
        console.log("Animal is super cute");
    }
    iscute(){
        return true;
    }
}
const Animal1 = new Animal("Monkey",3);
console.log(Animal1.eat());
console.log(Animal1.isSupercute());
//dog class
class Dog{
    constructor(name,age,speed){
        this.name = name;
        this.age = age;
        this.speed = speed;
    }
    eat(){
        return `${this.name} whose age is ${this.age} year eats fruits`;
    }
    isSupercute(){
        console.log("Animal is super cute");
    }
    iscute(){
        return true;
    }
}
const tom = new Dog('tommy',3);
console.log(tom.eat());
//inheritance of class properties
class Cow extends Animal{ // extends <parent_class_name>
}
const Cow1 = new Cow('cow',7);
console.log(Cow1.eat());
//SUPER KEYWORD
class Horse extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
    runs(){
        return `my horse name is ${this.name}, his age is ${this.age} and he runs at ${this.speed}`;
    }
    //MODIFING THE EAT OF HORSE
    eat(){
        return`this is the eating of horse green grass`;
    }
}
const rase = new Horse('rase',21,'70kmph');
console.log(rase.eat());
console.log(rase.runs());
console.log(rase.eat())
//