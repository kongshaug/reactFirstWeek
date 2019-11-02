import React from "react";
import upper, { text1, text2, text3 } from "./file1";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("hi up me") + " but not me"}</p>
    </div>
  );
}

export default App;
