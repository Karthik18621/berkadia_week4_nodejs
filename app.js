const express = require('express');
const mongoose=require('mongoose');
const bodyparser = require('body-parser');
const cors =require('cors');
const exp= express();
const db=require('./db/conn').database;

mongoose.connect(db, {
    useNewUrlParser : true
})
.then(()=>
{
    console.log('Database connected successfully');
})
.catch((err)=>
{
    console.log("Unable to connect");
})

const port = process.env.PORT||3000;
exp.use(cors());
exp.use(bodyparser.json());

const empval = require('./routes/route');
exp.use('/api/emp',empval);
exp.listen(port,()=>
{
    console.log('server is running on', port);
});
