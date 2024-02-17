// const userMethords = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years`;
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//     sing: function(){
//         return 'toon na na na la la la';
//     }
// ab chahe hm yaha kitne vi methods bnaye wo call ho jayega directly user ke according
//}
//HERE the function CreateUser has provided us prototype here so we will use that 
//instead of writing it in an object
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years`;
};
createUser.prototype.is18 = function(){
    return this.age>=18;
};
createUser.prototype.sing = function(){
    return 'toon na na na la la la';
};
function createUser(firstName,lastName,age,email,address){
    const user = Object.create(createUser.prototype);//this creates an empty object as well as it establises a chin proto
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
console.log(createUser.prototype);
console.log(user2.about());
console.log(user3.about());
console.log(user2.is18());
console.log(user3.is18());
