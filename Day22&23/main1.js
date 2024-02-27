//if we want to change the color of nav-items
//so we will use here loop
//Types of Loops
//1:) for loop
//2:) for of loop
//3:) ForEach (We cannot use ForEach method to iterate through HTMLCollections)
 var navitems = document.getElementsByTagName("a");//sare text(link) <a> tag ke andar hai es karan hm getElementsByTagName
 for(let i=0; i<navitems.length; i++){
    //console.log(navitem);
    const navitem = navitems[i];
    navitem.style.backgroundColor = "#fff";
    navitem.style.color = "green";
 }