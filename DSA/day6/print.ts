// printing row wise and column in reverse formate
let arr2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [11,12,13],
];

function iteration2(arr: number[][]){
    let s ="";
    for(let i = 0; i < arr.length; i++){
        for(let j = arr[i].length-1; j >= 0;j--){
            s+=arr[i][j]+" ";
        }
    }
    console.log(s);
}
// if u wont 1st function to print then uncomment belove and comment last one
// iteration2(arr2);

function iteration3(arr: number[][]){
    let s="";
    for(let j = 0; j< arr[0].length; j++){
        for(let i = arr.length-1; i>=0 ;i--){
            s+=arr[i][j]+" ";

        }
    }
    console.log(s);
}
iteration3(arr2);