// Write a function that returns largest number in an array, where arr = [5, 0, 10, 8, 17, 1]
let arr = [5, 0, 10, 8, 17, 1];
let largestNum = -Infinity;

function largestNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];     
        }
    }
    return largestNum;
}
let res = largestNumber(arr);
console.log(res);