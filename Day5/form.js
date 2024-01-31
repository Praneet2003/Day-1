document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('form').addEventListener("submit").function(Event){
        console.log(Event);
        Event.preventDefault();
    }
})