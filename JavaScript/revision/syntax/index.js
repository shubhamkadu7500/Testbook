// local variable
var fruit ="mango";
document.getElementById('f1').innerHTML = fruit;

// globle variable
function hello(){
    var gretting = "welcome"
    console.log(gretting);
    var gretting = "shubham";
    console.log(gretting);
}
// var gretting = "shubham"; here we cannot redefine it
hello();

var price = 100;
document.getElementById('pri').innerHTML = price;
document.getElementById('litral').innerHTML = `the given fruirt is ${fruit}`;


console.log(`this is my line 1
this is my line 2
this is my lne 3`);
// abobe is exaple of litral here we used `` this it calculate spaces in string
console.log("this is my line 1 \n this is my line 2 \n this is my lne 3");