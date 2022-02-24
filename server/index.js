const express = require('express')
const app = express()
const dotenv = require("dotenv");
const cors = require('cors')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect( process.env.CONNECTION_URL 
,{  useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())



app.post('/api/register', (req,res)=>{
    console.log(req.body)
    res.json({ status: 'ok' })
})

app.listen(1337, () => {
    console.log('Server has started on 1337')
})