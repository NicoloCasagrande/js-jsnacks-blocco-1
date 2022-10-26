"use strict";

const oddNumbers = [];

for (let i = 1; i <= 6; i++) {
    const userNumber = Number(prompt("inserisci un numero"));
    if(userNumber % 2 === 1){
        oddNumbers.push(userNumber);
        console.log(oddNumbers);
    }
}

console.log(oddNumbers);