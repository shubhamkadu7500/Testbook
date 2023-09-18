// printing row wise and column in reverse formate
var arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [11, 12, 13],
];
function iteration2(arr) {
    var s = "";
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            s += arr[i][j] + " ";
        }
    }
    console.log(s);
}
// iteration2(arr2);
function iteration3(arr) {
    var s = "";
    for (var j = 0; j < arr[0].length; j++) {
        for (var i = arr.length - 1; i >= 0; i--) {
            s += arr[i][j] + " ";
        }
    }
    console.log(s);
}
iteration3(arr2);
