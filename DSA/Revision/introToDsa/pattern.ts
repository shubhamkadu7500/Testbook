var n = 15;
var s = "";
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i;j++){
        s+="*"
    }
    s+="\n";
}
console.log(s);

// print this pattern 1st for loop is for row and 2nd for column
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************
// **************
// ***************