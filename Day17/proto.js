// Solution using object.create
var obj1 = {
    key1: "value1",
    key2: "value2"
}
var obj2 = Object.create(obj1);//this is the another method of creating an empty object(DUE TO WHICH A PROTOTYPE CHAIN IS FORMED)
console.log(obj2);//{}
obj2.key3 = "value3";
console.log(obj2.key1);//agar key1 obj2 me nhi hai to obj2 khud obj1 ke pass jakr uski key1 ki vakue print kr dega
//HOW IS THIS WORKING
console.log(obj2);//[[prototype]] object
console.log(obj2.__proto__);//this is also called dinder
//
//
//using proto in this code
const userMethords = {
    about : function(){
        return `${this.firstName} is ${this.age} years`;
    },
    is18 : function(){
        return this.age >=18;
    },
    sing: function(){
        return 'toon na na na la la la';
    }
// ab chahe hm yaha kitne vi methods bnaye wo call ho jayega directly user ke according
}
function createUser(firstName,lastName,age,email,address){
    const user = Object.create(userMethords);//this creates an empty object as well as it establises a chin proto
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}
const user1 = createUser('anshu','chourasia',20,'anshukumarchourasia2911','bihar');
const user2 = createUser('Mehul','lala',20,'meh@gmail.com','bihar');
const user3 = createUser('Ayush','gupta',13,'ayu@gmail.com','bihar');
console.log(user2.about());
console.log(user3.about());
console.log(user2.is18());
console.log(user3.is18());
//Most VVI
//PROTOTYPE IN JAVASCRIPT(Proto aur Prototype alag alag chije hai)
//function in js are function + object
function hello(){
    console.log("hello world");
}
hello();
console.log(hello.name);//NAME property tells us the name of function
// ADDING MYOWNPROPERTY IN JAVASCRIPT
hello.myOwnProperty = 'very unique value';
console.log(hello.myOwnProperty);
//PROTOTYPE
// function provides us a free space (an empty object) which is known as prototype
console.log(hello.prototype);//{}
//only functions provides prototype property
if(hello.prototype){
    console.log("Prototype is present")
}else{
    console.log("Prototype is not present");
}
//we can add any property in prototype 
hello.prototype.lpu = "Lovely professional university";
//we can also add functions to prototype
hello.prototype.myFunc = function(){
    return "Hi Praneet!";
}
console.log(hello.prototype.myFunc());