const express = require('express');

const app = express();

const mongoose = require('mongoose');

const User = require('../Backend/Routes/Signup-Routes/UserSignup/UserSignup');

app.use(express.json());

app.get('/', (req,res,next)=>{
    console.log("Node server is up to date");
});

app.post('/signup', async (req,res,next)=>{
    const {email,password} = req.body;
    console.log(email);
    console.log(password);
});

app.use(User);

mongoose.connect('mongodb+srv://Mahad:Mahad123@cluster0.btoqm.mongodb.net/fyp').then(()=>{
    app.listen(5000);
}).catch(err=>{
    console.log(err);
})
