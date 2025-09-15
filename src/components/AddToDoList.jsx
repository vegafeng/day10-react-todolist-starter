import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';
import { createToDo } from '../apis/api';
const AddToDoList = () => {
  const { dispatch } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = async() => {
    if (inputValue.trim().length === 0) return alert('Input is empty');
    const newToDo = {
      done: false,
      text: inputValue.trim()
    }
    const response = await createToDo(newToDo);
    dispatch({ type: 'Add', todos: response.data });
    setInputValue('');

  };

  return (
    // <div className="todo-items-container">
    <div className="input-container">
      <input type="text" value={inputValue} onChange={handleChangeInput} placeholder="Add a new todo..." />
      <button onClick={handleAdd}>Add</button>
    </div>
    // </div>
  );
};

export default AddToDoList;
