function firstOccurenace(arr:number[], target:number): number{
    let l = 0;
    let r= arr.length-1;
    let pot = -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);

        if(arr[mid] == target){
            pot= mid;
            r= mid-1;
        }else if(arr[mid]< target){
            l = mid+1;

        }else{
            r=mid-1;
        }
        
    }
    return pot;
}

let arr = [1,1,1,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6];
let idx = firstOccurenace(arr,6);
console.log(idx);