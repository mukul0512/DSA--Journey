// find the second largest number in an array where we can have the following cases
// case 1 let arr = [4]; // only one element
// case 2 let arr = []; // empty array
// case 3 let arr = [-4, -9, 0, -2, -8, -7, 8] // can have -ve and +ve elements
// case 4 let arr = [-4, -9, 0, 2, 8, 7, 1, 10, -10, 10] // if array have duplicates elements then count duplicates at once.
let arr = [-4, -9, 0, 2, 8, 7, 1, 10, -10, 10];
let firstLargest = -Infinity;
let secondLargest = -Infinity;
function findSecondLargestNumber(arr) {
    if(arr.length < 2) return null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let res = findSecondLargestNumber(arr);
console.log(res);