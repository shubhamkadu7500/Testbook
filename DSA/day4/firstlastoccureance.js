function firstOccurenace(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var pot = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            pot = mid;
            r = mid - 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return pot;
}
var arr = [1, 1, 1, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];
var idx = firstOccurenace(arr, 6);
console.log(idx);
