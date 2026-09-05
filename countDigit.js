// Write a function that return the count of digits in a number, n = 259
let n = 259;
function countDigits(n) {
    let count = 0;
    while(n > 0){
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}
let result = countDigits(n);
console.log(result);