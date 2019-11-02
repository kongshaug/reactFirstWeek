import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewPerson(props) {

  const [person, setPerson] = useState(props.addPerson);

  const savePerson = evt => {
    if (person.personText === "") {
      return;
    }
    props.savePerson(person);
    
  };

  useEffect(() => setPerson({ ...props.addPerson }), [props.addPerson]);

  const onChange = evt => {
    const val = evt.target.value;
    person.personText = val;
    setPerson({ ...person });
    
  };
 
 const title = "demo"; // DELETE ONLY FOR TESTING
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={person.personText} onChange = {onChange}/>
        <br/><br/>
        <button onClick = {savePerson}  className="btn btn-info">Save</button>{//onClick={saveTodo}  
        }
        
      </form>
      
    </div>
  );
}
export default NewPerson;

NewPerson.propTypes = {
  nextTodo: PropTypes.object,
  addTodo: PropTypes.func
}
