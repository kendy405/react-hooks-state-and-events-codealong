//import React from "react";
//import ReactDOM from "react-dom";
//import App from "./components/App";

//ReactDOM.render(<App />, document.getElementById("root"));
import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
function Toggle() {
    const [isOn, setIsOn] = useState(false);
  
    function handleClick() {
      setIsOn((isOn) => !isOn);
    }
  
    const color = isOn ? "red" : "white";
  
    return (
      <button style={{ background: color }} onClick={handleClick}>
        {isOn ? "ON" : "OFF"}
      </button>
    );
  }

