import React, { useState, useEffect } from "react";
import "./App.css";







function App4() {
  const [count, setCount] = useState(parseInt(localStorage.getItem("count")));
  const[countChanged, setCountChanged] = useState(false);
  const[timeSplitter, setTimeSplitter] = useState("Whanna'no tha time?")
  
 
useEffect(()=>{

    const timer = setTimeout(() => {
        var dateobj = new Date(); 
   
        var time = dateobj.toLocaleTimeString();
        setTimeSplitter("time is: "+ time)
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
 
   



  useEffect(()=>{
    
   
      
        localStorage.setItem("count", count);
        
    
        
  },[countChanged])

  


  return (
    <div className="App">
      <p>State and Events with React </p>
      <p>count: {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
          setCountChanged(!countChanged);
        }} >add</button>
      <p> </p>
      <button
        id="minus"
        onClick={() => {
          setCount(count - 1);
          setCountChanged(!countChanged);
        }}
      >
        {" "}
        minus{" "}
      </button>
      <p> </p>
      <input placeholder="set value" id="input"></input>

      <button
        onClick={function() { setCount(parseInt(document.getElementById("input").value));}} >set value
        </button>
        <br></br>
        <button
        onClick={function() { 
            setCount(count + parseInt(document.getElementById("input").value));
            setCountChanged(!countChanged);
            }} >plus with value
        </button>
        <div id="div"></div>

        <div>{timeSplitter}</div>
    </div>
  );
}

export default App4;
