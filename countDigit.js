// Write a function that return the count of digits in a number, n = 259
// Edge cases -> 
// 1. if n = 0;
// 2. if n = -298;
let n = -259;
function countDigits(n) {
    if (n == 0) {
        return 1;
    }
    n = Math.abs(n); // convert -ve num to +ve num, abs stands for absolute for handling -ve numbers.
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}
let result = countDigits(n);
console.log(result);