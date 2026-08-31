// Print all the even numbers in the given arr = [10, 6, 2, 0, 8, 3, 80];
let arr = [10, 6, 2, 0, 8, 3, 80];
let evnNum = [];
let idx = 0;

const printAllEvenNumber = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evnNum[idx] = arr[i];
            idx++;
        };
    }
    return evnNum;
}
let res = printAllEvenNumber(arr);
console.log(res);