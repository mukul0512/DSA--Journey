// Given an integer x, return true if x is a palindrome and false otherwise.
// Ex 1. x = 121; o/p -> true
// Ex 2. x = -121; o/p -> false
// Ex 3. x = 10; o/p -> false

let x = -121;
function palindromeNum(x) {
    if (x < 0) {
        return false;
    }
    let xCopy = x;
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
    if (rev === xCopy) {
        return true;
    } else {
        return false;
    }
}
let res = palindromeNum(x);
console.log(res);