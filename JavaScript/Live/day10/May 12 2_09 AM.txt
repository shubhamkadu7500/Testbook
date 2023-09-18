// Basic Example

// let text="Hello Students";
// let pattern=/students/i;
// let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;

// ---------Modifiers/attributes---------
// ***************i***********
// let text="How Is evryone and what is this";
// let pattern=/ios/i;
// // let result=text.match(pattern);
// // let result=pattern.exec(text);
// // let result=pattern.test(text);
// let result=pattern.ignoreCase
// console.log(result);
// document.getElementById('demo').innerHTML=result;


// ***************g***********
// let text="How Is evryone and what is this";
// let pattern=/is/ig;
// let result=text.match(pattern);
// let result=pattern.exec(text);
// let result=pattern.test(text);
// let result=pattern.global
// console.log(result);
// document.getElementById('demo').innerHTML=result;

// ***************m***********
// let text=`Is this
// all there
// is
//  is`;
//  let pattern=/^is/mig;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;



// ------------Groups-----------
// ***************[abc]***********
// let text='Is this but all tHere Is?'
//  let pattern=/[h]/g;
//  let pattern=/[is]/gi;
// let pattern=/[A-H]/g;
// let pattern=/[A-z]/g;

//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// ***************[^abc]***********
// let text='Is this but all tHere Is?'
//  let pattern=/[^h]/g;
//  let pattern=/[is]/gi;
// let pattern=/[A-H]/g;
// let pattern=/[A-z]/g;

//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;



// ***************[0-9]***********
// let text='716242738290'
// //  let pattern=/[1-4]/g;
// let pattern=/[^1-4]/g;


//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// // ***************(X|Y)***********
// let text='re, green,red,red,green,green,gr,blue,yellow';
// //  let pattern=/[1-4]/g;
// let pattern=/(red|green)/g;


//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// ------------Metacaharacters-----------

// // ***************\w***********
// // match a-z A-Z 0-9,_
// let text='Give_100%';
// //  let pattern=/[1-4]/g;
// let pattern=/\w/g;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// // ***************\w***********
// // match a-z A-Z 0-9,_
// let text='Give_100%';
// //  let pattern=/[1-4]/g;
// let pattern=/\w/g;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// // ***************\W***********
// // match non word characters
// let text='Give_100%@@!';
// //  let pattern=/[1-4]/g;
// let pattern=/\W/g;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;

// // ***************\d***********
// // match digit characters
// let text='Give_100%@@!';
// //  let pattern=/[1-4]/g;
// let pattern=/\d/g;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// ***************\D***********
// match non digit characters
// let text='Give_100%@@!';
// //  let pattern=/[1-4]/g;
// let pattern=/\D/g;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// ------------Qauntifiers-----------
// // ***************+***********
// let text='Helloooo Wor ld! He llo coollege!';

// let pattern=/o+/g;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// //              *
// let text='Helloooo Wor ld! He hoe hoo huyuyo llo coollege!';

// let pattern=/ho*/gi;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;


// // // ***************?***********
// let text='1,10,100 or 1000?';

// let pattern=/100?/g;
//  let result=text.match(pattern);
// document.getElementById('demo').innerHTML=result;



// // ***********p{N}**********
// // var str='abcpp';
// // var str='abcpppp';
// var str='abcpppppppp';
// var pattern=/p{4}/g;

// var result=str.match(pattern);
// document.getElementById('demo').innerHTML=result;


// ***********{x,y}**********
// var str='abcpp';
// var str='abcpppp';
// var txt='100,1000 or 10000?';
// var pattern=/\d{3,4}/g;

// var result=txt.match(pattern);
// document.getElementById('demo').innerHTML=result;




// ***********{x,}**********
var txt='100,1000 or 10000?';
var pattern=/\d{3,}/g;

var result=txt.match(pattern);
document.getElementById('demo').innerHTML=result;