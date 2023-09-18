var n = 7;
function diamondPrinter(n) {
    var stars = 1;
    var spaces = Math.floor(n / 2);
    var s = "";
    for (var i = 1; i <= n; i++) {
        // this loop will run
        for (var j = 1; j <= spaces; j++) {
            s += " ";
        }
        for (var j = 1; j <= stars; j++) {
            s += "*";
        }
        s += "\n";
        if (i <= Math.floor(n / 2)) {
            stars += 2;
            spaces -= 1;
        }
        else {
            stars -= 2;
            spaces += 1;
        }
        console.log(s);
    }
    // decide the future
}
diamondPrinter(n);
