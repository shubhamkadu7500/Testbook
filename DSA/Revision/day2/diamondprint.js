//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
var n = 7;
function diamondPrint(n) {
    var stars = 1;
    var spaces = Math.floor(n / 2);
    var s = "";
    for (var i = 1; i <= n; i++) { //this loop will run n time, for n rows
        //first spaces need to print
        for (var j = 1; j <= spaces; j++) {
            s += " ";
        }
        //add stars number of stars
        for (var j = 1; j <= stars; j++) {
            s += "*";
        }
        s += "\n";
        //decide the future with
        //condition for decrementing and incrementing
        if (i <= Math.floor(n / 2)) {
            stars += 2;
            spaces -= 1;
        }
        else {
            stars -= 2;
            spaces += 1;
        }
    }
    console.log(s);
}
diamondPrint(n);
