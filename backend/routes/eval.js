const express = require("express");
const app = express();

var fs = require("fs")


app.post("/recv_code",  async(req,res) => {
    const code = req.body.code
    const mode = req.body.mode
    console.log(code, mode)
    fs.writeFileSync("./py/test.asm", code)
    const {execSync} = require('child_process');
    if (mode == "twoints") {
        fs.writeFileSync("./code.in", `${req.body.reg1}\n${req.body.reg2}`)
        execSync('./py/asm < ./py/test.asm > ./py/test.mips | python3 ./py/mips_twoints.py < ./code.in > ./code.out');
    } else {
        execSync('python3 -m py/mips_array > code.out');
    }
    console.log(toString(fs.readFileSync("./code.out")))
    res.send(fs.readFileSync("./code.out"))
});

module.exports = app;

