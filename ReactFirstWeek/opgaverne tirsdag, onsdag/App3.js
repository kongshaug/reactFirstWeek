import React from 'react';
import {names} from './file2'






function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function WelcomePerson(props){
      console.log(props)
    const {firstName, lastName, email} = props.person;
      return <h2>{firstName} , {lastName}, {email}</h2> 

  }

  
  Welcome.defaultProps = {
    name: "hi"
  }


  function App3() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Welcome name="pal" />
        <Welcome />
        <WelcomePerson person={names[0]} /> 
       
        
      </div>
    );
  }

export default App3;