import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, nextTodo, editTodo }) => {

 // const [todo, setTodo] = useState(nextTodo);
  

  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todoText} <button onClick={function(){deleteTodo(todo.id)}}>Delete</button>
          <button onClick={function(){editTodo(todo.id)}}>Edit</button></li>
        
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
}
