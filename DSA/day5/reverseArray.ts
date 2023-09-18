// reverse all array
function reverse(arr:number[]){
    let l = 0;
    let r = arr.length-1;

    while(l<r){
        // swap arr[l] <> arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

// revere array only given array index
function reverseInRange(arr:number[], l:number, r:number){
    
    while(l<r){
        // swap arr[l] <> arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

let arr  = [1,2,3,4,5,6,7];
reverseInRange(arr,2,5);
// reverse(arr);
// if you wont to rever then comment reversInRange and uncomment reverse
console.log(arr);

