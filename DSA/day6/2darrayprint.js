var arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [11, 12, 13],
];
function iteration(arr) {
    var s = "";
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            s += arr[i][j] + " ";
        }
    }
    console.log(s);
}
iteration(arr1);
