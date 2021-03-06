const express = require('express')
const app = express()
const dotenv = require("dotenv");
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/userModel')
// const jwt = require('jsonwebtoken')

dotenv.config()

mongoose.connect( process.env.CONNECTION_URL 
,{  useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())



app.post('/api/register', async (req,res)=>{
    console.log(req.body)
    try{
      const user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
      })
      res.json({status: 'ok'})  
    } catch (err) {
        res.json({status: 'error'})
    }
    
})



app.post('/api/login', async (req,res) => {

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if (user) {
    const token = jwt.sign(
        {
            name: user.name,
            email: user.email,
        },
        'secret123'
    )

        return res.json({ status: 'ok', user: token })
    }  else {
        return res.json({ status: 'error', user: false })
    }    
})

app.listen(1337, () => {
    console.log('Server has started on 1337')
})