function factorial(n) {
    // base case
    if (n == 1)
        return 1;
    // calc my ans n = n* (n-1)!
    var nm1f = factorial(n - 1);
    return n * nm1f;
}
console.log(factorial(5));
