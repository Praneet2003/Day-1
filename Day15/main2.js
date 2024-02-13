//sorting numbers according to assending order 
const Numbers = [5,9,1200,400,3000];
Numbers.sort((a,b)=> a-b);//for descending order write b-a
console.log(Numbers);
//how is it working
//1200,400
//a-b ----> 800
//if a-b ----> positive(greate than 0) then simply 
//b aaghe aa jata hai 
//410,1200
//a-b ----> negative(less than 0) then  simply 
// a aaghe aa jayega
//real-life example:- e-commerce website price high-low
const product = [
    {productId: 1 ,productName: "p1", price: 300},
    {productId: 2 ,productName: "p2", price: 3000},
    {productId: 3 ,productName: "p3", price: 200},
    {productId: 4 ,productName: "p4", price: 8000},
    {productId: 5 ,productName: "p5", price: 500},
]
//low to high
//product.sort((a,b)=>{
//this above methord is changing our product object
const lowToHigh = product.slice(0).sort((a,b)=>{
     return a.price - b.price;
});
console.log(lowToHigh);//gives sorted products
const HighToLow = product.slice(0).sort((a,b)=>{
    return b.price - a.price;
});
console.log(HighToLow);
//find methord
const MyArray = ['Hello','Cat','dog','lion'];
function isLength3(string){
    return string.length === 3;
}
const ans = MyArray.find(isLength3);
console.log(ans);
//find methord only returns the first occurance
//that's why it only gives cat as an output
//real life example :- to find the customer details on e-commerce 
const users=[
    {userId: 1, userName: "praneet"},
    {userId: 2, userName: "mehul"},
    {userId: 3, userName: "ayush"},
    {userId: 4, userName: "badal"},
    {userId: 5, userName: "anuranjan"},
];
const myUser = users.find((user)=>{
    return user.userId===2;
});
console.log(myUser);
//every methord
const ids = [2,4,6,8,10,12]
const answ = ids.every((number)=> number%2===0);
//callback function ----> true/false(boolean)
//every-methord ----> true/false(ye true tb hi dega jb upar wale array ke sare elsments even ho )
console.log(answ);
//every sare every pe condition check krega 
//agr bich me ek vi condition satisfy nhi hogi to every methord false return kr dega 
//real life example of every methord
const UserCart = [
    {productId: 1, productName: "mobile" ,price: 12000},
    {productId: 2, productName: "tab" ,price: 29000},
    {productId: 3, productName: "laptop" ,price: 45000},
]
const checkPrice = UserCart.every((product)=> product.price<30000);
console.log(checkPrice);
//some method
//agar ek vi condition satisfy hogi to true return krega
const numb = [3,5,7,9,12]
const result = numb.some((number)=>number%2===0);
console.log(result);
//real-line example 
const Cart =[
    {productId: 1, productName: "mobile" ,price: 12000},
    {productId: 2, productName: "tab" ,price: 29000},
    {productId: 3, productName: "laptop" ,price: 45000},
]
const priceCheck = Cart.some((product)=> product.price>3000);
console.log(priceCheck);
//fill methord
//used in making an array of same items
const MyNum = new Array(10).fill(5);
console.log(MyNum);
//we can also change the items of an array
//for ex:-
const OrignalArray = [1,2,3,4,5,6,7,8,8,9];//we want to make 3,4,5 to 0
OrignalArray.fill(0,2,5); //syntax:- (fill,start,stop);
console.log(OrignalArray);
//splice methord
//used to insert or delete something in between of array
//deletion
const Arr =['item1','item2','item3'];
const deletedItem = Arr.splice(1,1); //syntax(start, delete , insert)
console.log(Arr);
console.log(deletedItem);
//insert
const deletedItem2 = Arr.splice(1,0,'inserted item'); //syntax(start, delete , insert)
console.log(Arr);
console.log(deletedItem2);//no items deleted here
//deletion and insertion of items using splice
const deletedItem1 = Arr.splice(1,1,'Mango','strawberry');//we can also insert one or more items after deletion
console.log(Arr);
console.log(deletedItem1);