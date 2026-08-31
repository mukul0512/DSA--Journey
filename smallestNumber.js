// write a function that return the smallest number in an array where arr = [5, 2, 10, 8, 17, 11]
let arr = [5, 2, 10, 8, 17, 11];
let smallest = Infinity;
function smallestNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
let res = smallestNumber(arr);
console.log(res);
