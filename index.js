const express = require('express');
const app = express();
const port = process.env.port || 3000;
app.use(express.json());


const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/VK_Bus';             //VK_Bus is database name

mongoose.connect(url,()=>{
    console.log('Successfully Connected to Database')
})

// const BusListModel = require("./models/BusListmodel");

// Routes 

// app.get('/busses', async (req,res)=>{
//     const bus = await BusListModel.find();
//     // console.log(bus);
//     res.status(200).send(bus)
// })

app.use("/bus",require("./routes/Bus"));


// server port 
app.listen(port,()=>{
    console.log('Your app is running in port ',port);
})