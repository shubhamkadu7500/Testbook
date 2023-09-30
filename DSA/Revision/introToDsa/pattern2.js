// var n :number= 5;
// var s:string= "";
// for(let i = 1; i<=n; i++){
//     //for printing blank spacess, jprint blank spacess
//     for(let j = 1;j <=n-1;j++){
//         s+=" ";
//     }
//     //k printing * , it will print * after that blank spacess
//     for(let k = 1;k<=i;k++){
//         s+="*";
//     }
//     s+="\n";//this will go to next line
// }
// console.log(s);
//print this pattern
//     *
//    **
//   ***
//  ****
// *****
var n = 5;
var s = "";
for (var line = 1; line <= n; line++) {
    var star = line;
    var space = n - star;
    for (var j = 1; j <= space; j++) {
        s += " ";
    }
    for (var k = 1; k <= star; k++) {
        s += "*";
    }
    s += "\n";
}
console.log(s);
