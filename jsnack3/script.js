"use strict";

const invitedList = ["nicolo", "giorgio", "antonio", "marco"];

const userName = prompt("Inserisci il tuo nome per sapere se sei presente sulla lista degli inivitati");

let present = false;

for (let i = 0; i < invitedList.length; i++) {
    const element = invitedList[i];
    if(userName === element){
        present = true;
        break;
    }
}

if(present === true){
    console.log(`Sei presente sulla lista, puoi entrare`);
}else{
    console.log(`Non sei presente sulla lista, torna a casa prima di buscarle`);
}