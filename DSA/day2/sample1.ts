let n= 7;
function diamondPrinter(n: number){
    let stars = 1;
    let spaces = Math.floor(n/2);
    let s: string = "";

    for (let i = 1; i<=n; i++){
        // this loop will run
        for(let j = 1; j <= spaces; j++){
            s+=" ";
        }
        for(let j = 1; j <= stars; j++){
            s+="*";
        } 

        s+="\n";

        if(i<=Math.floor(n/2)){
            stars +=2;
            spaces-=1;
        }
        else{
            stars -=2;
            spaces +=1;
        }
        console.log(s);
    }
    // decide the future
    
}
diamondPrinter(n);

