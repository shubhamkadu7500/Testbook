let arr2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [11,12,13],
];

function zigzagIteartion(arr : number[][]){
    let s ="";
    for(let i = 0 ; i < arr.length; i++){
        if(i%2==0){
            //even = left to rigth
            for(let j = 0; j < arr[i].length; j++){
                s+=arr[i][j]+" ";
            }
        }else {
            // odd = rigth to left
            for(let j = arr[i].length-1; j>=0 ;j--){
                s+=arr[i][j]+" ";
            }
        }
    }
    console.log(s);
}
zigzagIteartion(arr2);