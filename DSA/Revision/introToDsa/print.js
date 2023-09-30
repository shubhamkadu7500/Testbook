var n = 5;
var string = "";
for (var i = 0; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);
