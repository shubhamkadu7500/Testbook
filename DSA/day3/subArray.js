// sub Array printing
var arr = [3, 4, 2, 6];
function printAllSubArray(arr) {
    for (var sp = 0; sp < arr.length; sp++) {
        for (var ep = sp; ep < arr.length; ep++) {
            var res = [];
            for (var i = sp; i <= ep; i++)
                res.push(arr[i]);
            console.log(res);
        }
    }
}
printAllSubArray(arr);
