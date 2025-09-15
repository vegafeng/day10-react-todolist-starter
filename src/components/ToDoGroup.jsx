import React, { useContext, useEffect } from "react";
import { getToDos } from "../apis/api";
import { TodoContext } from "../contexts/TodoContext"; 
const ToDoGroup = () => {
  const { state, dispatch } = useContext(TodoContext);
  useEffect(() => {
    getToDos().then((response) => {
      dispatch({ type: 'LOAD_TODOS', todos: response.data });
      console.log(response.data);
    });

  }, []);

    const handleClick = (id) => {
    dispatch({ type: 'Done', id });
  };
  
  const handleClickDelete = (id) => {
    dispatch({ type: 'Delete', id });
  };

  return <>

  {state.map(({ text, done, id }) => (
              <div key={id} className="todo-item">
                <span className={`todo-text ${done ? 'done' : ''}`} onClick={() => handleClick(id)}>
                  {text}
                </span>
                <button className="delete-button" onClick={() => handleClickDelete(id)}>X</button>
              </div>
            ))}
</>
};

export default ToDoGroup;