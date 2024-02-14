//Object oriented javascript & prototypical
//Methords



//function inside keywords
const person = {
    firstName : "Praneet",
    age: 20,
    about: function(){
//this methord
        console.log(`Person name is ${this.firstName} and my age is ${this.age}`);
        console.log("Person name is praneet and my age is 20");
    }
}
person.about();