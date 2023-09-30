
//print this pattern
//     *
//    **
//   ***
//  ****
// *****

let n:number = 5;
let s:string ="";
for(let line = 1; line <=n;line++){
    let star= line;
    let space = n-star;
    for(let j = 1; j<=space; j++){
        s+=" ";
    }
    for(let k = 1; k <= star; k++){
        s+="*";
    }
    s+="\n";
}
console.log(s);