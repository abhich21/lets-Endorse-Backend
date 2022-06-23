const express = require('express')
const connect = require('./config/db')
require('dotenv').config();
const port = process.env.PORT || 6000;

const app = express()
app.use(express.json())



app.listen(port, async () => {
    try {
        await connect();
        console.log(`Connected to port ${port}`)
        
    } catch (err) {
        console.log(`Error connecting to port ${port}`)
    }
})