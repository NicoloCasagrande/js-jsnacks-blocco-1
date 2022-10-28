const numArray = [1, 3, 8, 15, 21, 4, 12, 86];

console.log(numArray);

let sum = 0;

for (let i = 0; i < numArray.length; i++) {
    if(i%2=== 1){
        sum += numArray[i];
        console.log(sum);
    }
}

