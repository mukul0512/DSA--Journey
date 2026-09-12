// Printing 1 to n using recursion
// (1, 2, 3, 4, ...... n)
// (1, x + 1, x + 2, x + 3, .... n)
let n = 5;
let x = 1;
function printOneToN(x) {
    if (x > n) return;
    console.log(x);
    x = x + 1;          // ++x;
    printOneToN(x);
}

printOneToN(x);