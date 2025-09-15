import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';
import ToDoGroup from './ToDoGroup';
import { createToDo } from '../apis/api';
import AddToDoList from './AddToDoList';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext); 
  const [inputValue, setInputValue] = useState('');

const handleChangeInput = (e) => {
 setInputValue(e.target.value);
 };

  const handleAdd = async() => {
    if (inputValue.trim().length === 0) return alert('Input is empty');
    dispatch({ type: 'Add', text: inputValue });
    setInputValue('');
    const newToDo = {
      done: false,
      text: inputValue.trim()
    }
    const response = await createToDo(newToDo);
    dispatch({ type: 'Add', todos: response.data });
    setInputValue('');

};

  return (
    <div className="todo-list">
      <h2>TodoList</h2>
      {state.length === 0 ? (
        <div>
          <img src="../logo192.png" alt="Logo" />
          <div className="input-container">
            <input type="text" value={inputValue} onChange={handleChangeInput} placeholder="Add a new todo..." />
            <button onClick={handleAdd}>Add</button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-items-container">
            <ToDoGroup />
          </div>
          <AddToDoList />
        </>
      )}
    </div>
  );
};

export default TodoList;
