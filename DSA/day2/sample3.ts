// both diagonal print 
let n = 5;
function printDiagonal(n : number) : void{
    let s ="";
    for(let i = 1;i<=n;i++){
        for(let j = 1; j <=n; j++){
            if(i+j==n+1 && i==j){
                s+="X";
            }
            else if(i==j){
                s+="\\";
            }else if(i+j==n+1){
                s+="/";
            }
            else{
                s+="-";
            }
        }
        s+="\n";
    }
    console.log(s)
}
printDiagonal(n);