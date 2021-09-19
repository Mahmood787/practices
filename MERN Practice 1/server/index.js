const express = require('express');
const app = express()
const mongoose = require('mongoose')
const User = require('./modules/user.module')
const jwt = require('jsonwebtoken')
const cors = require( 'cors')
mongoose.connect('mongodb://localhost:27017/mern-practice-1'); // mongo will create and connect

//middleware
app.use(cors());
app.use(express.json())

app.get("/register", (req, res) => {
    res.send("hello world")
})

app.post('/api/register', async(req, res) => {
    try{
        const data = await User.create({
            name: req.body.name,
            email: req.body.email,
            pass: req.body.pass,
        })
        res.json({status: "ok"})
    } catch(e){
        res.json({status: "Record Already Exist"})
        console.log(e,"eeeeeeeee")
    }
})

app.post('/api/signin', (req, res) => {
    const user = User.findOne({
        email: req.body.email,
        pass: req.body.pass
    })
    if(user){
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        })
        res.json({status: "ok", user: token})
    } else {
        res.json({status: "error", user: false})
    }
})
app.listen(1333, ()=> {
    console.log("server started on 1333")
})