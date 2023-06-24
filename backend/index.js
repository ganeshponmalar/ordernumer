const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const port = 9000;

const url = 'mongodb://localhost:27017/jsondata';

const app = express();

app.use(cors());


mongoose.connect(url,{useNewUrlParser: true});

const con = mongoose.connection

con.on('open',()=>{

console.log("connected...")

})

app.use(express.json())

const dataRouter = require('./routers/aliens')

app.use('/aliens',dataRouter )


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})