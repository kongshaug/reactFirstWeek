import React from "react"
import PropTypes from 'prop-types';



export default function AllPersons(props) {
  const { persons,editPerson,deletePerson} = props;
  

  function fillTable(){
   return persons.map(p =><tr key = {p.id}><th>{p.age}</th><th>{p.name}</th><th>{p.gender}</th><th>{p.email}</th><th>
     <button onClick={()=>{deletePerson(p.id)}}>Remove</button></th><th>
       <button onClick={()=>{editPerson(p.id)}}>Edit</button></th></tr>)
 
  }


  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th><th>Delete</th><th>Edit</th></tr>
        </thead>
        <tbody>
          {fillTable()}
        </tbody>
      </table>
  
      
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
