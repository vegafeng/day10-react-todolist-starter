import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext); 
  const [inputValue, setInputValue] = useState('');

  const handleClick = (id) => {
    dispatch({ type: 'Done', id });
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim().length === 0) return alert('Input is empty');
    dispatch({ type: 'Add', text: inputValue });
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
            {state.map(({ text, done, id }) => (
              <div key={id} className="todo-item">
                <span className={`todo-text ${done ? 'done' : ''}`} onClick={() => handleClick(id)}>
                  {text}
                </span>
              </div>
            ))}
          </div>
          <div className="input-container">
            <input type="text" value={inputValue} onChange={handleChangeInput} placeholder="Add a new todo..." />
            <button onClick={handleAdd}>Add</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
