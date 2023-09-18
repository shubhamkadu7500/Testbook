function countStairPaths(n:number, currStain : number) : number{
    if(currStain == n) return 1;
    if(currStain > n) return 0;

    let one = countStairPaths(n,currStain+1);
    let two = countStairPaths(n,currStain+2);
    let three = countStairPaths(n,currStain+3);

    return one + two + three;
}
console.log(countStairPaths(3,0));