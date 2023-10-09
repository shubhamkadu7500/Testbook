//multer are used for storing data on anyware in sever and onlu storing url of data to mongodb
let express = require('express');
let multer = require('multer');
let mongoose = require('mongoose');
let app = express();
const port = 3200;

//to tell express to we used template engine like this
app.set('view engine', 'ejs'); //according to template engine name changes

//telling express public folder
app.use(express.static('public'));

//connecting database with mongoodb 
mongoose.connect('mongodb://localhost:27017/batch9image'); //this line connect dtatbase
//then creating model for uploading image
let myschema=mongoose.Schema({
    Picture:String,
});
let mymodel=mongoose.model('mymodel',myschema);

//storage defining
//storage the data
let storage = multer.diskStorage({
    destination:'./public/images',
    filename:(req, file, cb)=>{
        cb(null, Date.now()+file.originalname);
    }
});

//uploading images use spacinal type of pakages called multer, it is middleware which can multipart form data are uploaded
let upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{//minetype media type  and cb is call back
        if(file.mimetype=='image/jpeg'||
        file.mimetype=='image/jpg'||
        file.mimetype=='image/gif'||
        file.mimetype=='image/png'
        ){
            cb(null,true);
        }else{
            cb(null,false);
            cb(new Error('error accured only upload images type allwoed jpeg, jpg,gif,png'));
        }
    }
})



app.get("/", (req,res)=>{
    res.send('<h1>Home Page</h1>');
});

app.get('/indexfile', (req,res)=>{
    res.render('index'); //render is used to add template pages with out giving path of file
});

app.post('/singlepost',upload.single('single_input'), (req,res)=>{
    //to store data we use create method
    mymodel.create({Picture:req.file.filename})
    .then((x) => {
        console.log('successfull');
        res.redirect('/preview');
    }).catch((e) => {
        console.log(e);
    });
}); //upload here work as middleware  and sigle meathod can access only one file and in form input name is sinle_input here pass

app.get('/preview',(req,res)=>{
    mymodel.find().then((x)=>{
        res.render('preview',(x));
        console.log(x);
    })
    .catch((e)=>{
        console.log(e);
    })
})
app.listen(port,()=>{
    console.log(`the server has started at port ${port}`);
})