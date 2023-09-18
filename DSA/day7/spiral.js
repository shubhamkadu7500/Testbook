var arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
function spiralOrder(arr) {
    var n = arr.length;
    var m = arr[0].length;
    var total = n * m;
    var res = [];
    var tw = 0;
    var bw = n - 1;
    var lw = 0;
    var rw = m - 1;
    while (total > 0) {
        // print top wall
        for (var j = lw; j <= rw && total > 0; j++) {
            res.push(arr[tw][j]);
            total--;
        }
        tw++;
        // print rigth wall
        for (var i = tw; i <= bw && total > 0; i++) {
            res.push(arr[i][rw]);
            total--;
        }
        rw--;
        // print bottum wall
        for (var j = rw; j >= lw && total > 0; j--) {
            res.push(arr[bw][j]);
            total--;
        }
        bw--;
        // print left wall
        for (var i = bw; i >= tw && total > 0; i--) {
            res.push(arr[i][lw]);
            total--;
        }
        lw++;
    }
    return res;
}
;
spiralOrder(arr1);
