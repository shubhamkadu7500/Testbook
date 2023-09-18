var num = "4206";
function largestOddNumber(s) {
    var i = s.length - 1;
    while (i >= 0) {
        if ((parseInt(s[i]) % 2) == 1) {
            break;
        }
        i--;
    }
    return s.substring(0, i + 1);
}
;
console.log(largestOddNumber);
