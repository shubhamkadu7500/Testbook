function getMax(arr: number[] ): number {
    let maxi = 0;
    for(let i = 0; i < arr.length;i++){
        if(arr[i]>maxi) maxi = arr[i];

    }
    return maxi;
}
let arr = [5,2,1,3,6,4,7,1];
console.log(getMax(arr));
// printing max vlaues in arr
function printBarChart(arr: number[]): void{
    let cols  = arr.length;
    let rows = getMax(arr);
    while(rows > 0){
        let s = "";
        for(let j = 0; j < cols; j++){
            if(arr[j] >= rows) s+="*";
            else s+=" ";

        }
        console.log(s);
        rows--;
    }
}
printBarChart(arr);
// print arr using bar chart