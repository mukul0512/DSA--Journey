// write a function that returns the count of negative numbers in an array. where given arr = [2, -9, 17, 0, 1, -10, -4, 8]
let arr = [2, -9, 17, 0, 1, -10, -4, 8];
let count = 0;
let negNum = [];
function countNegativeNum(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            negNum = arr[i];
            count++;
        }
    }
    return count;
}
let res = countNegativeNum(arr);
console.log(res);
