//if we want to make thousands of functions here
// so we use a function that function create object
// add key value pair
// object ko return krega
// function createUser(firstName,lastName,age,email,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years`;
//     };
//     user.is18 = function(){
//         return this.age >=18;
//     }
//     return user;
// }
// const user1 = createUser('anshu','chourasia',20,'anshukumarchourasia2911','bihar');
// // console.log(user1);
// // console.log(user1);
// // const is18 = user1.is18();
// // const about = user1.about();
// // console.log(about);
// const user2 = createUser('Mehul','lala',20,'meh@gmail.com','bihar');
// const user3 = createUser('Ayush','gupta',13,'ayu@gmail.com','bihar');
// console.log(user2);
// console.log(user2.is18());
// console.log(user3.is18());
//
//in above case it requires more memory so we preffer the below one
//
//STORE METHORD IN DIFFERENT OBJECT
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years`;
    },
    is18 : function(){
        return this.age >=18;
    },
    sing: function(){
        return 'toon na na na la la la';
    }
}
function createUser(firstName,lastName,age,email,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}
const user1 = createUser('anshu','chourasia',20,'anshukumarchourasia2911','bihar');
const user2 = createUser('Mehul','lala',20,'meh@gmail.com','bihar');
const user3 = createUser('Ayush','gupta',13,'ayu@gmail.com','bihar');
console.log(user2.about());
console.log(user3.about());
console.log(user2.is18());
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
