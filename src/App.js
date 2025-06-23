import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState(""); // Step 1: Create a variable

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly style={styles.input} />

      <div style={styles.row}>
        <button onClick={() => handleClick("7")} style={styles.button}>7</button>
        <button onClick={() => handleClick("8")} style={styles.button}>8</button>
        <button onClick={() => handleClick("9")} style={styles.button}>9</button>
        <button onClick={() => handleClick("/")} style={styles.button}>/</button>
      </div>

      <div style={styles.row}>
        <button onClick={() => handleClick("4")} style={styles.button}>4</button>
        <button onClick={() => handleClick("5")} style={styles.button}>5</button>
        <button onClick={() => handleClick("6")} style={styles.button}>6</button>
        <button onClick={() => handleClick("*")} style={styles.button}>*</button>
      </div>

      <div style={styles.row}>
        <button onClick={() => handleClick("1")} style={styles.button}>1</button>
        <button onClick={() => handleClick("2")} style={styles.button}>2</button>
        <button onClick={() => handleClick("3")} style={styles.button}>3</button>
        <button onClick={() => handleClick("-")} style={styles.button}>-</button>
      </div>

      <div style={styles.row}>
        <button onClick={() => handleClick("0")} style={styles.button}>0</button>
        <button onClick={() => handleClick(".")} style={styles.button}>.</button>
        <button onClick={handleCalculate} style={styles.button}>=</button>
        <button onClick={() => handleClick("+")} style={styles.button}>+</button>
      </div>

      <div style={styles.row}>
        <button onClick={handleClear} style={styles.clear}>Clear</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: 300,
    margin: "50px auto",
    padding: 20,
    border: "2px solid black",
    borderRadius: 10,
    textAlign: "center",
    
  },
  input:{
    width: "100%",
    height: 40,
    fontSize: 18,
    marginBottom: 10,
    textAlign: "right",
    paddingRight: 10
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10
  },
  button: {
    width: "22%",
    padding: 10,
    fontSize: 18
  },
  clear: {
    width: "100%",
    padding: 10,
    fontSize: 18,
    backgroundColor: "#f44336",
    color: "white"
  }
};

export default App;
