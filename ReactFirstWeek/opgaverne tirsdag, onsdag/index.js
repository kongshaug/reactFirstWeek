import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2'
import App3 from './App3'
import App4 from './App4';
import App6 from './App6';
import App7 from './App7';
import App5 from './App5';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
import App11 from './App11';
import App12 from './App12';

let app = <App/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">ex1</a> &nbsp;
         <a href="/"  className="x" id="app2">ex2</a> &nbsp;
         <a href="/"  className="x" id="app3">ex3</a> &nbsp;
         <a href="/"  className="x" id="app4">ex4</a> &nbsp;
         <a href="/"  className="x" id="app5">ex5</a> &nbsp;
         <a href="/"  className="x" id="app6">ex6</a> &nbsp;
         <a href="/"  className="x" id="app7">ex7</a> &nbsp;
         <a href="/"  className="x" id="app8">Forms and Controlled Components  </a> &nbsp;
         <a href="/"  className="x" id="app9">ex9</a> &nbsp;
         <a href="/"  className="x" id="app10">ex10</a> &nbsp;
         <a href="/"  className="x" id="app11">Lifting State Up</a> &nbsp;
         <a href="/"  className="x" id="app12">API Interaction </a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "app4": app = <App4 />; break;
        case "app5": app = <App5 />; break;
        case "app6": app = <App6 />; break;
        case "app7": app = <App7 />; break;
        case "app8": app = <App8 />; break;
        case "app9": app = <App9 />; break;
        case "app10": app = <App10 />; break;
        case "app11": app = <App11 />; break;
        case "app12": app = <App12 />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));