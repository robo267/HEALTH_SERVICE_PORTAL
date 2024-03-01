const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Sample")
.then(() => {
    console.log("DB Connected");
    app.listen(8080,() => {
        console.log("Server listening.")
    })
})
.catch((err) => {console.log(err)})

const userschema = mongoose.Schema({
    First_Name:String,
    Last_Name:String,
    Email:String,
    Password:String
})

const hospitalschema = mongoose.Schema({
    Aboutus:String,
    address:String,
    establishment:Number,
    fee:Number,
    id:Number,
    image:String,
    name:String,
    phnno:Number,
    timings:String,
    services:Array
})

const dropdownschema = mongoose.Schema({
    data:Array
})

const usermodel = mongoose.model("userdatas",userschema);
const hospitalmodel = mongoose.model("hospitals",hospitalschema);
const dropdownmodel = mongoose.model("dropdowns",dropdownschema);

app.get('/users',async(req,res) => {
    let data = await usermodel.find({});
    console.log(data);
    res.json(data);
})

app.post('/adduser',async(req,res) => {
    let data = new usermodel(req.body);
    data.save();
    res.json(data);
})

app.put('/updateuser',async(req,res) => {
    let {_id,...rest} = req.body;
    let data = await usermodel.updateOne({_id:_id},rest);
    res.json(data);
})

app.get('/hospitals',async(req,res) => {
    let data = await hospitalmodel.find({});
    res.json(data);
})

app.get('/dropdown',async (req,res) => {
    let data = await dropdownmodel.find({});
    console.log(data[0].data);
    res.json(data[0].data);
})