const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 3001;



app.use(express.json()) 
app.use(require("./routes/eval"))

app.get("/hello",  async(req,res) => {
    res.send("hello!")
});

app.get("/",  async(req,res) => {
    res.send("ok!")
});

app.listen(PORT, ()=>{
    console.log("Port: " +  PORT)
})