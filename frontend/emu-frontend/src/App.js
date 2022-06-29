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
          <p>Enter the values for registers 1 and 2. These are the basic parameters for the program.</p>
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
          <p>
              Enter the code to run on the emulator. The version of MIPS that is running uses 32 registers. 
              Registers 0, 30, and 31 are reserved, but only register 0 is immutable. 
              Register 30 is a pointer to a 1MB stack of memory at your disposal.
              Register 31 stores the exit address, which (unauthentically) is -1 to terminate the program.
              For a MIPS reference, see the following: <a href={"https://uweb.engr.arizona.edu/~ece369/Resources/spim/MIPSReference.pdf"}>MIPS Reference</a>.
              The emulator will only run instructions covered in the <a href={"https://student.cs.uwaterloo.ca/~cs241/"}>CS 241</a> course.
          </p>
          
          <textarea 
            id="code"
            name="code"
            label="Enter code here"
            fullWidth
            autoComplete="jr $31"
            type="string"
            cols="25"
            rows="20"
            onChange={(e) => setCode(e.target.value)}
          />
          <button style={styles.button} onClick={handleSend}>Submit</button>
        </div>
        
        <div className="out" style={styles.out}>
          <p>Output: this will either show an error or the values of all 34 registers at the end of the program.</p>
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
    width: "40vw",
    display: "inline-block",
    float: "left",
    top: 0,
    margin: "1px"
  },
  inp: {
    height: "100vh",
    width: "20vw",
    display: "inline-block",
    float: "left",
    top: 0,
    margin: "1px"
  },
  out: {
    height: "100vh",
    width: "20vw",
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
  },
  button: {
    width: "100%"
  }
};

export default App;
