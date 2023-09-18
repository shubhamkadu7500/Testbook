let arr1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [11,12,13],
];

function iteration(arr : number[][]){
    let s: string = "";
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[i].length; j++){
            s+= arr[i][j]+" ";
        }
    }
    console.log(s);
}
iteration(arr1);