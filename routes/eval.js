const express = require("express");
const app = express();

var fs = require("fs")


app.get("/recv_code",  async(req,res) => {
    const code = req.body.code
    const mode = req.body.mode
    fs.writeFileSync("./test.asm", code)
    const {exec} = require('child_process');
    exec("./py/asm < ./test.asm > ./test.mips", (error, stdout, stderr) => {});
    if (mode == "twoints") {
        exec('python3 ./py/mips_twoints.py < ./code.in > ./code.out');
    } else {
        exec('python3 -m py/mips_array > code.out');
    }
    console.log(fs.readFileSync("code.out"))
    res.send(fs.readFileSync("code.out"))
});

module.exports = app;

