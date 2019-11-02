import React, { useState, useEffect } from "react";
import "./App.css";



function App5() {


  const [joke, setJoke] = useState(false);



useEffect(()=>{ 
  fetch("https://api.chucknorris.io/jokes/random").then(res => res.json()).then(data => 
  {
    document.getElementById("jokeId").innerText = data.value
  })},[joke])



useEffect(()=>{

  const randomJoke = setTimeout(()=>{
fetch("https://icanhazdadjoke.com/", {
  
  headers: {
    Accept: 'text/plain',
    Accept: 'application/json'
}})
.then(res=> res.json()).then(data =>
{
  document.getElementById("randJoke").innerText = data.joke
})
  },10000)

  return () => clearTimeout(randomJoke);

  
},[])


  return (
    <div className="App">
      <p id="jokeId">chock joke 
          
      </p>
   <button onClick={()=>{setJoke(!joke)}}>getChock jokes</button>

   <p id="randJoke">random joke</p>

    </div>
  );
}

export default App5;
