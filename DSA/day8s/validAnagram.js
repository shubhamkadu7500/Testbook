function isAnagram(s, t) {
    var fs = new Array(26).fill(0);
    var ft = new Array(26).fill(0);
    // filling the freq of t
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i);
        var index = ascii - 97;
        fs[index]++;
    }
    // filling the freq of t
    for (var i = 0; i < t.length; i++) {
        var ascii = t.charCodeAt(i);
        var index = ascii - 97;
        ft[index]++;
    }
    // compare both freq arrays
    for (var i = 0; i < 26; i++) {
        if (fs[i] != ft[i])
            return false;
    }
    return true;
}
;
var s = "ball";
var t = "lalb";
isAnagram(s, t);
console.log(isAnagram(s, t));