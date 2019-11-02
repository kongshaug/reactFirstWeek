import React from 'react';
import PropTypes from 'prop-types';

const PersonList = ({ persons, deletePerson, editPerson }) => {

 // const [todo, setTodo] = useState(nextTodo);
  

  return (
    <React.Fragment>
      <h2>All persons</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.personText} <button onClick={function(){deletePerson(person.id)}}>Delete</button>
          <button onClick={function(){editPerson(person.id)}}>Edit</button></li>
        
        ))}
      </ul>
    </React.Fragment>
  );
};
export default PersonList;

PersonList.propTypes = {
  todos: PropTypes.array
}
