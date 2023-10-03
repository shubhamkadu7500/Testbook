var n = 5;
var s = "";
for (var line = n; line >= 1; line--) {
    var spaces = n - line;
    var stars = line;
    //logic no 1
    // for(let k =1; k <=spaces; k++){
    //     s+=" ";
    // }
    // for(let j=1; j <= line; j++){
    //     s+="*";
    // }
    //logic no 2
    for (var j = 1; j <= n; j++) {
        if (j <= spaces) {
            s += " ";
        }
        else {
            s += "*";
        }
    }
    s += "\n";
}
console.log(s);
