"use script";

let sum = 0;

for (let i = 1; i <= 10; i++) {
    const userNumber = Number(prompt("Inserisci un numero"));
    sum += userNumber;
}

console.log(sum);