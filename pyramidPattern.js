let n = 5;
for (let i = 0; i < n; i++) {
    let row = " ";
    let space = n - (i + 1);
    for (let j = 0; j < space; j++) {
        row = row + " " + ("-");
    }
    let star = i + 1;
    for (let k = 0; k < star; k++) {
        row = row + " " + "* ";
    }
    console.log(row);
}
