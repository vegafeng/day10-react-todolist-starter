import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';
import ToDoGroup from './ToDoGroup';
import { createToDo } from '../apis/api';
import AddToDoList from './AddToDoList';
import { useNavigate } from 'react-router'; 

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext); 
  // const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); 

  // 使用 useEffect 监听 state 的变化
  useEffect(() => {
    if (state.length === 0) {
      navigate('/completed'); // 跳转到 completed 页面
    }
  }, [state, navigate]);

  return (
    <div className="todo-list">
      <h2>TodoList</h2>
      <ToDoGroup />
      <AddToDoList />
    </div>
  );
};

export default TodoList;
