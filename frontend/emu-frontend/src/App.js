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
      <div className="twoints" style={styles.twoints}>
        <div className="regs" style={styles.regs}>
          <input type="text"
            id="reg1"
            name="reg1"
            label="Value of $1"
            autoComplete="reg1"
            onChange={(e) => setReg1(e.target.value)}
            style={styles.tinp}
          />
          <input type="text"
            id="reg2"
            name="reg2"
            label="Value of $2"
            autoComplete="reg2"
            onChange={(e) => setReg2(e.target.value)}
            style={styles.tinp}
          />
        </div>
        <div className="inp" style={styles.inp}>
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
        <div className="out" style={styles.out}>
          <textarea 
            id="out"
            cols="15"
            rows="34"
            value={out}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  regs: {
    height: "100vh",
    width: "20vw",
    border: "5px solid red",
    display: "inline-block",
    float: "left",
    top: 0,
    margin: "1px"
  },
  inp: {
    height: "100vh",
    width: "20vw",
    border: "5px solid red",
    display: "inline-block",
    float: "left",
    top: 0,
    margin: "1px"
  },
  out: {
    height: "100vh",
    width: "20vw",
    border: "5px solid red",
    display: "inline-block",
    float: "left",
    top: 0,
    margin: "1px"
  },
  twoints: {
    width: "100vw",
    height: "100vh"
  },
  tinp: {
    width: "10vw"
  }
};

export default App;
