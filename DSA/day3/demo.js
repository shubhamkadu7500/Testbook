function getMax(arr) {
    var maxi = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxi)
            maxi = arr[i];
    }
    return maxi;
}
var arr = [5, 2, 1, 3, 6, 4, 7, 1];
console.log(getMax(arr));
// printing max vlaues in arr
function printBarChart(arr) {
    var cols = arr.length;
    var rows = getMax(arr);
    while (rows > 0) {
        var s = "";
        for (var j = 0; j < cols; j++) {
            if (arr[j] >= rows)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
        rows--;
    }
}
printBarChart(arr);
// print arr using bar chart
