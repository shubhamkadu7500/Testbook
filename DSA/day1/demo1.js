// let count =0;
// function withInstructionCount(fn){

// }
// const fibonacci = withInstructionCount((n) =>{
//     if(n <= n){
//         return 1;
//     }
//     return fibonacci(n-1)+fibonacci(n-2);
// });
// console.log(fibonacci(1));
// console.log("result of febonacci: "+ fibonacci(2));
// console.log("febonacci was called", count, "times");

// function generateFibonacci(n) {
//     let fibonacciSeries = [];
//     if (n >= 1) {
//       fibonacciSeries.push(0);
//     }
//     if (n >= 2) {
//       fibonacciSeries.push(1);
//     }
    
//     for (let i = 2; i < n; i++) {
//       const nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
//       fibonacciSeries.push(nextFibonacci);
//     }
  
//     return fibonacciSeries;
//   }
  
//   const n = 10; // Change this value to generate Fibonacci numbers up to the desired position.
//   const fibonacciNumbers = generateFibonacci(n);
//   console.log(fibonacciNumbers);
  
function gf(m){
    let fs =[];
    if(n >= 1){
        fs.push(0);
    }
    if(n >=2){
        fs.push(1);
    }

    for(let i = 2; i < n; i++){
        const nf = fs[i-1]+fs[i-2];
        fs.push(nf);
    }
    return fs;
}

const m= 5;
const fns =gf(m);
console.log(fn); 