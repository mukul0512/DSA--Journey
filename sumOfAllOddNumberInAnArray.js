let arr = [5, 3, 2, 0, 1];
let n = arr.length;
function sumOfOddNumber(n) {
    let isOdd = arr[n] % 2 !== 0;
    if (n == 0) {
        return isOdd ? arr[n] : 0;
        // if (isOdd) {
        //     return arr[n];
        // }
        // else {
        //     return 0;
        // }
    }
    return (isOdd ? arr[n] : 0) + sumOfOddNumber(n - 1);
    // if (isOdd) {
    //     return arr[n] + sumOfOddNumber(n - 1)
    // }
    // else {
    //     return 0 + sumOfOddNumber(n - 1);
    // }
}
let res = sumOfOddNumber(n - 1);
console.log(res);
