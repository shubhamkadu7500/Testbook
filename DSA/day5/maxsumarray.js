function mss(arr) {
    var train = 0;
    var maxi = 0;
    for (var i = 0; i < arr.length; i++) {
        var StartNewTrain = arr[i];
        var sitWithPrivious = train + arr[i];
        train = Math.max(StartNewTrain, sitWithPrivious);
        maxi = Math.max(train, maxi);
    }
    return maxi;
}
var arr = [5, -2, -7, 3, -4, -2, 6, 7, -2, 8, -1, 10, -2, -4, 2];
console.log(mss(arr));
// let arr = [5,-2,-7,3,-4,-2,6,7,-2,8,-1,10,-2,-4,2];
// function printAllSubArray(arr: any[]) : void{
//     for(let sp = 0 ; sp < arr.length; sp++){
//         for(let ep =sp; ep < arr.length; ep++){
//             let res:any[]=[];
//             for(let i = sp; i <= ep; i++) res.push(arr[i]);
//             console.log(res);
//         }
//     }
// }
// printAllSubArray(arr);
