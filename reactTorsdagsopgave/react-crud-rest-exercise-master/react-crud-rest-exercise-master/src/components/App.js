import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../apiFacade"



function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);
  const[updateList, setUpdateList] = useState(false);

  useEffect(() => {
    
    const fetchPersons = async () => {
    //This would be a great place to fetch data (all persons) from the backend
      
      setPersons([... await api.getPersons()]);

    }
    fetchPersons();
    
  },[updateList]);


  const storeAddEditPerson = (person) => {
  
 const update = async () => {
  //This would be a great place to fetch data (all persons) from the backend
  
     await  api.addEditPerson(person)

    setUpdateList(!updateList)

  }
  update();
  setPersonToAddEdit(emptyPerson)
   }
  

  const deletePerson = (id) => {
    

    const Delete = async () => {
      //This would be a great place to fetch data (all persons) from the backend
        
         await  api.deletePerson(id)
    
        setUpdateList(!updateList)
    
      }
      Delete();
  }

  function editPerson(id) {
    const p = persons.find(per => per.id === id)
    console.log(p)
    setPersonToAddEdit({...p})
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h3>CRUD Demo </h3>
          <br /><br /><br />
        </div>
        <div className="col-md-6 col-xs-12">
          <h3>All Persons</h3>
        
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
