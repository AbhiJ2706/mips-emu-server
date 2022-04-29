import React from "react";
import logo from './logo.svg';
import axios from "axios";
import './App.css';

const domain = "http://localhost:3001"

function App() {
  const [reg1, setReg1] = React.useState();
  const [reg2, setReg2] = React.useState();
  const [code, setCode] = React.useState();
  const [out, setOut] = React.useState();
  async function handleSend() {
    console.log(reg1)
    console.log(reg2)
    console.log(code)
    console.log(`${domain}/recv_code`)
    const res = await axios.post(`${domain}/recv_code`, {
      "Access-Control-Allow-Origin": "*",
      "code": code === undefined ? "" : code,
      "mode": "twoints",
      "reg1": reg1,
      "reg2": reg2
    })
    console.log(res)
    setOut(res.data.toString())
  }
  return (
    <div className="App">
      <div className="twoints">
        <div className="regs">
          <input type="text"
            id="reg1"
            name="reg1"
            label="Value of $1"
            autoComplete="reg1"
            onChange={(e) => setReg1(e.target.value)}
          />
          <input type="text"
            id="reg2"
            name="reg2"
            label="Value of $2"
            autoComplete="reg2"
            onChange={(e) => setReg2(e.target.value)}
          />
        </div>
        <div className="inp">
          <textarea 
            id="code"
            name="code"
            label="Enter code here"
            fullWidth
            autoComplete="jr $31"
            type="string"
            cols="15"
            rows="20"
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={handleSend}>Submit</button>
        </div>
        <div className="out">
          <p id="out">
            {out}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
