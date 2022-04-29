const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors({origin: '*', credentials: false}));
app.use(function (req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,content-type, Content-Type, Accept');   
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json()) 
app.use(require("./routes/eval"))

app.listen(PORT, ()=>{
    console.log("Port: " +  PORT)
})