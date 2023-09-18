function subStringPrint(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            // 
            console.log(s.substring(i, j + 1));
        }
    }
}
var s = "shubham";
subStringPrint(s);
