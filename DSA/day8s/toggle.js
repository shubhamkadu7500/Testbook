function togglecase(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i);
        // convert ith char to ascii
        // check if s[i] capital or small
        if (ascii < 97) {
            // i am an a capital letter, convert to small letter by adding 32
            ascii += 32;
        }
        else {
            // i am a small letter, convert me to capital by -32
            ascii -= 32;
        }
        // add the corresponding char for the ascii value in ans
        ans += String.fromCharCode(ascii);
    }
    return ans;
}
var s = "aBcDzKil";
console.log(togglecase(s));
