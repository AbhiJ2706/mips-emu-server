const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3001;

app.use(express.json()) 
app.use(require("./routes/eval"))

app.listen(PORT, ()=>{
    console.log("Port: " +  PORT)
})