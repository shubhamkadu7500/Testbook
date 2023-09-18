var n = 5;
var s = "";
for(let line =n; line>=1; line--){
    let spaces = n-line;
    let stars = line;
    
    

    for(let j = 1; j<=spaces;j++){
        s+=" ";

    }
    for(let j = 1; j<=stars;j++){
        s+="*";
    }
    s+='\n';
}
console.log(s);
