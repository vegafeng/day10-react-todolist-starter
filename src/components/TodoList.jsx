import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';
const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext); 
  function handleClick(id) {
    dispatch({type: 'Done', id})
  }
  return (
    <div>
      <div>This is the TodoList Component.</div>
      {
        state.map(({text, done, id}) => {
          return <div className={`todo-item ${done? 'done': ''}`} onClick={() => handleClick(id)}
>{text}, {done+""}</div>;
        })
      }
</div>
  );
}

export default TodoList