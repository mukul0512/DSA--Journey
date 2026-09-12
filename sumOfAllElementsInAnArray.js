let arr = [5, 3, 2, 0, 1];
let n = arr.length;
function sum(n) {
    let calcSum = 0;
    if (n == 0) return arr[0];
    calcSum = arr[n] + sum(n - 1);
    return calcSum;
}
let res = sum(n - 1);
console.log(res);