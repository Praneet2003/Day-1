//GETTER AND SETTERS
class person{
    constructor(name1, name, age){
        this.name1 = name1;
        this.name = name;
        this.age = age;
    }
    //treating the function fullname as a property just by using get
    get fullName(){
        return `${this.name1} ${this.name}`;
    }//we can change the name using set method
    // setName(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    //SETTER METHORD
    set fullName(fullName){
        //fullName.split(" ")
        //['anshu, kumar']
        //fullName.split(fullName){
            const [firstName, lastName]= fullName.split(" ")
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
const person1 = new person('praneet','raj', 21);
console.log(person1);
console.log("full name is:",person1.name1,person1.name);
//console.log(person1.fullName());
console.log(person1.fullName);//this is called as getter method
person1.setName('Anshu','kumar');
//direct method without using set method
person1.firstName = 'mehul';
person1.lastName = 'raj';
console.log(person1.firstName);
console.log(person1.lastName);

