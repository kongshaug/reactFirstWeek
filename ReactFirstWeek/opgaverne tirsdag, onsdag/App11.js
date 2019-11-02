import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PersonList from "./PersonList";
import NewPerson from "./NewPerson";
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), personText: "peter" },
    { id: uuid(), personText: "simon" },
    { id: uuid(), personText: "lars" }
  ];

  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", personText: "" });


  const addPerson = person => {
    if (person.id === "") { // id=-1 Indicates a new object
      person.id = uuid();
      persons.push(person);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let personToEdit = persons.find(p => p.id === person.id);
      personToEdit.personText = person.personText;
    }
    setPersons([...persons]);
    setNewPerson({id:"", personText:""})
  };

  const deletePerson = index => setPersons([...persons.filter(p => p.id !== index)])
  

  const editPerson = (index) => {
    let personToEdit = persons.find(p => p.id === index)
    setNewPerson({...personToEdit})
  }

  return (
    <div className="App">
      <div className="container outer">
        <h2>total persons: {persons.length}</h2>
        <div className="row">
          <div className="col-6 allTodos">
            <p>List of people</p>
            <PersonList persons={persons} 
            deletePerson = {deletePerson}
            editPerson = {editPerson}
            />
            
          </div>
          <div className="col-5 new-todo">
            <p>add Person</p>
            <NewPerson 
            addPerson={newPerson}
            savePerson = {addPerson}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
