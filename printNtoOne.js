// Printing n to 1 using recursion
// (n, n - 1, n - 2, n - 3, ..... 1)
let n = 10;
function printNtoOne(n) {
    if (n < 1) return;
    console.log(n);
    n = n - 1;      // printNtoOne(--n)
    printNtoOne(n);
}
printNtoOne(n);