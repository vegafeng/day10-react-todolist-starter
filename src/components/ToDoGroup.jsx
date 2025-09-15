import React, { useContext, useEffect } from "react";
import { getToDos } from "../apis/api";
import { TodoContext } from "../contexts/TodoContext"; 
import { deleteToDo } from "../apis/api";
import {updateToDo} from "../apis/api";
import './TodoList.css';
const ToDoGroup = () => {
  const { state, dispatch } = useContext(TodoContext);
  useEffect(() => {
    getToDos().then((response) => {
      dispatch({ type: 'LOAD_TODOS', todos: response.data });
      console.log(response.data);
    });


  }, []);

    const handleClick = async (id) => {
    await updateToDo(id);
    dispatch({ type: 'Done', id });
  };
  
  const handleClickDelete = async (id) => {
    await deleteToDo(id); // 调用删除的 API
    dispatch({ type: 'Delete', id }); // 更新状态
  };

  return <>
<div className="todo-items-container">
  {state.map(({ text, done, id }) => (
              <div key={id} className="todo-item">
                <span className={`todo-text ${done ? 'done' : ''}`} onClick={() => handleClick(id)}>
                  {text}
                </span>
                <button className="delete-button" onClick={() => handleClickDelete(id)}>X</button>
              </div>
            ))}</div>
</>
};

export default ToDoGroup;