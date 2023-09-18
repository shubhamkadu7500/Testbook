// print sunstring of string
function subStringPrint(s:string){
    for(let i =0; i < s.length; i++){
        for(let j =i; j < s.length;j++){
            // 
            console.log(s.substring(i,j+1));
        }
    }
}
let s= "shubham";
subStringPrint(s);