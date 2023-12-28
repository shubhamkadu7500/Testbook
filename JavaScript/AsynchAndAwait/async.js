// sync
// console.log("12");
// console.log("13");
// console.log("14");

// async 1st para function is called callback 2nd mili second
console.log("hey1");
setTimeout(function(){
 console.log("hey");
}, 2000);
console.log("hey2");




// promiss
var ans = new Promise((res,rej)=>{
    if(false){
        return res();
    }else{
        return rej();
    }
})

ans.then(function() {
    console.log("resolve howa hai");
})
.catch(function(){
    console.log("reject howa hai");
})

var ans1 = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);

    if(n < 5){
        return res();
    }else{
        return rej();
    }
})
ans1.then(function(){
    console.log("below");
})
.catch(function(){
    console.log("above");
})