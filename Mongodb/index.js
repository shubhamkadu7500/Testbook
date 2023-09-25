const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/batchnineagain')
.then(()=>console.log('CDatabase has been connected'))
.catch(()=>console.log('Database Not Connected'))
//here batchnineagain is database it after the local host
const courseSchema = new mongoose.Schema({
    title:String,
    cType:String,
    noVideos:Number,
    authore:String,
    active:Boolean
});
//collection first
const courseRecord = new mongoose.model("courseRecord", courseSchema);


// create Document and send data to mongodb server
// single data
// const Reactdata =  new courseRecord({
//     title:"React JS",
//     cType:"Front end",
//     noVideos:45,
//     authore:"Shubham Kadu",
//     active:true
// });
// Reactdata.save();

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

// const createDocument=async()=>{
//     try{
//         const allData=await courseRecord.create([
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
//         ]);
//             // const result=await courseRecord.insertMany([Ajaxdata,HTMLdata,CSSData,NodeData,Expressdata])
//     }
//     catch(e){
//         console.log('Error');
//     }
// }
// createDocument();

//****************************************************************
//read queries this is used for read mongodb server data that are stored in mongodb
// const getDocument = async()=>{
//     const result1 = await courseRecord.find();
//     console.log(result1);
// }
// getDocument();

// ********************************************************

// specifick data get queries
// const getDocument = async()=>{
//     const result1 = await courseRecord.find({title:'Ajax Js'});
//     console.log(result1);
// }
// getDocument();

//**************************************

// diffrent projections - this shows that only in queries
// const getDocument = async()=>{
//     const result1 = await courseRecord.find({title:'Ajax Js'},{title:1});
//     console.log(result1);
// }
// getDocument();

//************************************************************

//shows only title here it skip _id with 0
// const getDocument = async()=>{
//     const result1 = await courseRecord.find({title:'Ajax Js'}).select({title:1,_id:0});
//     console.log(result1);
// }
// getDocument();

//***********************************************

//using skip and limit
// const getDocument = async()=>{
//     const result1 = await courseRecord.find().limit(1).skip(8);
//     console.log(result1);
// }
// getDocument();

//**********************************************
//gte grether than euqal to (using operators)
// const getDocument = async()=>{
//     const result1 = await courseRecord.find({noVideos:{$gte:34}}).count();
//     console.log(result1);
// }
// getDocument();
//******************************************

//using sort method
//desending orders
// const getDocument = async()=>{
//     const result1 = await courseRecord.find().sort({title:1});
//     console.log(result1);
// }
// getDocument();

//asending order
// const getDocument = async()=>{
//     const result1 = await courseRecord.find().sort({title:-1});
//     console.log(result1);
// }
// getDocument();

//***************************************** 

//using redExp to find mean inside /  /i this suing this you can pass upper lower case title for finding
// const getDocument = async()=>{
//     const result1 = await courseRecord.find({title:/react Js/i});
//     console.log(result1);
// }
// getDocument();

//*********************************************

// update data
// const updateDocument = async()=>{
//     try{
//         const result1 = await courseRecord.updateOne(
//             {_id},
//             {$set:{title:'PhpJs'}}
//         )
//         console.log(result1);
//     }
//     catch(e){
//         console.log(e.error);
//     }
// }
// //pass here original _id
// updateDocument('6511248c947771448f42e8a0');

//perform other like delete an other cred operations

