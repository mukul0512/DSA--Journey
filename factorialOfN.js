let n = 5;
function factorialOfN(n) {
    if (n == 1) return 1;
    let calcFact = 0;
    calcFact = n * factorialOfN(n - 1);
    return calcFact;
}
let res = factorialOfN(n);
console.log(res);
