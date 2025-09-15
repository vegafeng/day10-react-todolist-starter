import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';
import ToDoGroup from './ToDoGroup';
import { createToDo } from '../apis/api';
import AddToDoList from './AddToDoList';
import { useNavigate } from 'react-router'; // 导入 useNavigate

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext); 
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); // 创建 navigate 函数

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = async () => {
    if (inputValue.trim().length === 0) return alert('Input is empty');
    const newToDo = {
      done: false,
      text: inputValue.trim()
    };
    const response = await createToDo(newToDo);
    dispatch({ type: 'Add', todos: response.data });
    setInputValue('');
  };

  // 使用 useEffect 监听 state 的变化
  useEffect(() => {
    if (state.length === 0) {
      navigate('/completed'); // 跳转到 completed 页面
    }
  }, [state, navigate]);

  return (
    <div className="todo-list">
      <h2>TodoList</h2>
      {/* {state.length === 0 ? (
        <div>
          <img src="../logo192.png" alt="Logo" />
          <div className="input-container">
            <input 
              type="text" 
              value={inputValue} 
              onChange={handleChangeInput} 
              placeholder="Add a new todo..." 
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </div>
      ) : ( */}
       
          <ToDoGroup />
          <AddToDoList />
    
       {/* )} */}
    </div>
  );
};

export default TodoList;
