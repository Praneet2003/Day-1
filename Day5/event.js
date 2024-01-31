document.addEventListener("DOMContentLoaded",function(){
    function handelMouseOver(event){
        console.log(event)
    }
    document.getElementById('start').addEventListener("click",function(){
        document.addEventListener("mouseover",handelMouseOver)
    })
    document,getElementById('stop').addEventListener("click",function(){
        document.removeEventListener("mouseover",handelMouseOver)
    })
    
    document.addEventListener("keypress", function(e){
        console.log(e.key);
        if (e.key === '2'){
            e.preventDefault();
            e.stopPropagation();
        }
    })
    document.querySelector(".parent").addEventListener("click",function(){
        console.log("parent clicked");
    }.true)
    document.querySelector(".child").addEventListener("click",function(){
        console.log("child clicked");
    }.true)
    document.getElementById(".subchild").addEventListener("click",function(){
        console.log("subchild clicked");
    }.true)
})
