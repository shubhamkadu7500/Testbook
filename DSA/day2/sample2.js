var n = 5;
function printDiagonal(n) {
    var s = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if (i == j) {
                s += "\\";
            }
            else {
                s += "-";
            }
        }
        s += "\n";
    }
    console.log(s);
}
printDiagonal(n);
