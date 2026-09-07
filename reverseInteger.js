/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

Input: x = 1534236469
Output: 0 instead of 9646324351

*/

let x = 1534236469;
function reverseInteger(x) {
    let xCopy = x;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
        let lastDigit = x % 10;
        rev = (10 * rev) + lastDigit;
        x = Math.floor(x / 10);
    }
    let limit = Math.pow(2, 31); 
    // let limit = 2**31;
    if (rev < -limit || rev > limit) {
        return 0;
    }
    return (xCopy < 0) ? -rev : rev;
}
let res = reverseInteger(x);
console.log(res);