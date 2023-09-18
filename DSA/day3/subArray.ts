// sub Array printing
let arr = [3,4,2,6];
function printAllSubArray(arr: any[]) : void{
    for(let sp = 0 ; sp < arr.length; sp++){
        for(let ep =sp; ep < arr.length; ep++){
            let res:any[]=[];
            for(let i = sp; i <= ep; i++) res.push(arr[i]);
            console.log(res);
        }
    }
}
printAllSubArray(arr);