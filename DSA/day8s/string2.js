// Palindrome (means after revese still same string appear)
// print palidromicsubstring
function isPalindrome(s) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
function palindromicSubStringPrinter(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            // we have to print the substring from i to j
            var substr = s.substring(i, j + 1);
            if (isPalindrome(substr) == true) {
                console.log(substr);
            }
        }
    }
}
// let s= "NAMAN";
var s = "abcd";
palindromicSubStringPrinter(s);
isPalindrome(s);
