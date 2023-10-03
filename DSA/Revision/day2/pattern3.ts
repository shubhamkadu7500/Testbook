let n = 5;
let s ="";

for(let line = n; line >= 1; line--){
    let spaces = n-line;
    let stars = line;
    //logic no 1
    // for(let k =1; k <=spaces; k++){
    //     s+=" ";
    // }
    // for(let j=1; j <= line; j++){
    //     s+="*";
    // }

    //logic no 2
    for(let j = 1; j<=n;j++){
        if(j<=spaces){
            s+=" ";
        }else{
            s+="*";
        }
    }
    s+="\n";
}
console.log(s);