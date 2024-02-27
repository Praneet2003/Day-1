//get and set attributes
var link = document.querySelector("a");
console.log(link);//gives object as an output 
//HTML Collection
//
console.log(link.getAttribute("href"));// we can get any attribute by this method
var todo = document.querySelector("input")//jo pehla input bs wahi select hoga
console.log(todo.getAttribute("type"));
console.log(todo.getAttribute("value"));//null as an output
//
//We Can Also Change The Values of attribute by using setAttributes
link.setAttribute("href","https://lpu.com");//syntax("<attribute_name>","<new_value for attribute>")
console.log(link.getAttribute('href'));
//
//If we want to obtain a particular part from the values of attributes
//by using sile
console.log(link.getAttribute("href").slice(1,19,1));
//
//
//get multiple elements using getElements by class name
//
var navitem = document.getElementsByName("nav-item");
console.log(navitem);//it gives an array like object as an output
//i.e we can  use indexing
console.log(navitem[1]);
//output:- gives 1st nav item
//<li class="nav-item"><a href=" ">Todo</a></li>
//
// get multiple elements using querySelectorAll
var navitem = document.querySelectorAll(".nav-item");
console.log(navitem);
console.log(navitem[1]);
// Gives Output as NodeList
//h
