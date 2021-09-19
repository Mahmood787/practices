const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt  = require('jsonwebtoken')
mongoose.connect('mongodb://localhost:27017/full-mern-stack-video') // mongo will create and connect

// middleWare
app.use(cors())
app.use(express.json())// to convert req.body to json


app.post("/api/register", async(req, res) => {
    console.log(req.body);
    try{
        const user = await  User.create({
            name: req.body.name,
            email: req.body.email,
            pass: req.body.pass
        })
        res.json({status: 'ok'})

    }catch(err){
        res.json({status: 'error Record already exixt'})
    }
    
})

app.post("/api/login", async(req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        pass: req.body.pass
    })
    if(user){
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        },"secret123")// secret should be given through env file
        res.json({status:"ok", user:token})
    }else{
        res.json({status: 'error', user: false });
    }
})
app.listen(1337, () => {
    console.log('Server Started on 1337')
})