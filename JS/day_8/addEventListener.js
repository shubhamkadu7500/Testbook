// const a=document.getElementById('hover');
// const btn=document.getElementById('btn')

// btn.addEventListener('click',clickfunctionData);
// function clickfunctionData(){
//     document.getElementById('demo').innerHTML="Clicked on button"
// }


// btn.addEventListener('click',function clickfunctionData(){
//     document.getElementById('demo').innerHTML="Clicked on button inside addevent listener"

// });

// btn.addEventListener('click',()=>{
//     document.getElementById('demo').innerHTML="Clicked on button inside addevent listener with callback"

// });



// mouseover and mouseout
// a.addEventListener('mouseover',()=>{
//     // console.log('Mouse Hover');
//     btn.style.backgroundColor='red'
// })
// a.addEventListener('mouseout',()=>{
//     // console.log('Mouse Hover');
//     btn.style.backgroundColor='yellow'
// })




// extra
document.addEventListener('mouseover',function(e){
    if(e.target.matches('.btn1')){
        console.log('mouseover');
        return;
    }
    if(e.target.matches('#hover')){
        console.log('hover effect');
        return;
    }
})