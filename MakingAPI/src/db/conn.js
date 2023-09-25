const mongoose = require('mongoose');
const MenRanking = require('../models/cricketinfo');

mongoose.connect('mongodb://127.0.0.1:27017/batchnineApi')
.then(()=>console.log('Database has been connected'))
.catch(()=>console.log('Database Not Connected'))
//here batchnineApi is database it after the local host
