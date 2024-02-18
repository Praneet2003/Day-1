const dynamicContent = document.getElementById('dynamic-text-color');
console.log(dynamicContent)
 const phrases =["Software Engineer...","Student","Human being..."]
 let letterIndex = 0;
 function printLetters(phrase){
    if(letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex +=1;
        setTimeout(function(){
            printLetters(phrase)
        }, 300)
    }
    printLetters(phrase[0])
 }