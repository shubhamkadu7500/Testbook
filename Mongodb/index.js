const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/batchnineagain')
.then(()=>console.log('CDatabase has been connected'))
.catch(()=>console.log('Database Not Connected'))

const courseSchema = new mongoose.Schema({
    title:String,
    cType:String,
    noVideos:Number,
    authore:String,
    active:Boolean
})
const courseRecord = new mongoose.model("courseRecord", courseSchema);

// create Document and send data to mongodb server
// single data
const Reactdata =  new courseRecord({
    title:"React JS",
    cType:"Front end",
    noVideos:45,
    authore:"Shubham Kadu",
    active:true
});
Reactdata.save();

//********************************************************************

// async await using
// const createDocument = async()=>{
//     try{
//         const Vuedata=new courseRecord({
//                 title:"Vue Js",
//                 cType:'Front End',
//                 noVideos:55,
//                 authore:'Richa Arora',
//                 active:true
//             })
//             const result=await Vuedata.save();
//             console.log(result);
//     }
//     catch(e){
//         console.log('Error');
//     }
// }
// createDocument();

//********************************************************************

// store multiple data using async
// const createDocument=async()=>{
//     try{
//         const Ajaxdata=new courseRecord({
//                 title:"Ajax Js",
//                 cType:'Front End',
//                 noVideos:25,
//                 authore:'Shubham Kadu',
//                 active:true
//             })

//             const HTMLdata=new courseRecord({
//                 title:"HTML Js",
//                 cType:'Front End',
//                 noVideos:25,
//                 authore:'Shuham Kadu',
//                 active:true
//             })
//             const CSSData=new courseRecord({
//                 title:"CSS",
//                 cType:'Design',
//                 noVideos:25,
//                 authore:'Shubham Kadu',
//                 active:true
//             })

//             const NodeData=new courseRecord({
//                 title:"Node Js",
//                 cType:'Back End',
//                 noVideos:35,
//                 authore:'Shubham Kadu',
//                 active:true
//             })

//             const Expressdata=new courseRecord({
//                 title:"Express Js",
//                 cType:'Backe End',
//                 noVideos:34,
//                 authore:'Shubham Kadu',
//                 active:true
//             })

//             const result=await courseRecord.insertMany([Ajaxdata,HTMLdata,CSSData,NodeData,Expressdata])
//     }
//     catch(e){
//         console.log('Error');
//     }
// }
// createDocument();

//********************************************************************

//this last one has error in code solve this error
// const createDocument=async()=>{
//     try{
//         const allData=new courseRecord.create(
//             {
//                 title:"Php Js",
//                 cType:'Front End',
//                 noVideos:25,
//                 authore:'Shubham Kadu',
//                 active:true
//             },
//             {
//                 title:"Js",
//                 cType:'Front End',
//                 noVideos:25,
//                 author:'Shubham Kadu',
//                 active:true
//             }
//         )
//             const result=await courseRecord.insertMany([Ajaxdata,HTMLdata,CSSData,NodeData,Expressdata])
//     }
//     catch(e){
//         console.log('Error');
//     }
// }
// createDocument();
