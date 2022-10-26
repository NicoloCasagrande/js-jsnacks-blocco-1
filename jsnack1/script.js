"use strict";

const firstWord = prompt("Inserisici una parola");
const secondWord = prompt("Inserisci un'altra parola");

if(firstWord.length === secondWord.length){
    console.log(`Le parole sono della stessa lunghezza, non ve le stampo`);
}else if(firstWord.length > secondWord.length){
    console.log(firstWord, secondWord);
}else{
    console.log(secondWord, firstWord);
}

