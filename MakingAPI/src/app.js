const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
//to unblock unothenticated api data
 
require('./db/conn');
const MenRanking = require('./models/cricketinfo');

app.use(express.json());
//telling express that we using json type of data


//hore page
app.get('/',async(req,res)=>{
    res.send('<h1>Hello Students</h1>');
});

//getting posted data into page
app.get('/mendata', async(req,res)=>{
    try{
        const getmens = await MenRanking.find();
        res.status(200).send(getmens);
    }catch(e){
        console.log(e.message);
    }
});

// to post data
app.post('/menscricket', async(req,res)=>{
    try{
        const addingMensRecords = new MenRanking(req.body);
        console.log(addingMensRecords);
        const insertedData = await addingMensRecords.save();
        console.log(insertedData);
        res.status(200).send(insertedData);
    }catch(e){
        console.log(e.message);
    }
});

app.listen(port, ()=>{
    console.log(`the server has stared at port ${port}`);
});