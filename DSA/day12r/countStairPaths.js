function countStairPaths(n, currStain) {
    if (currStain == n)
        return 1;
    if (currStain > n)
        return 0;
    var one = countStairPaths(n, currStain + 1);
    var two = countStairPaths(n, currStain + 2);
    var three = countStairPaths(n, currStain + 3);
    return one + two + three;
}
console.log(countStairPaths(3, 0));
