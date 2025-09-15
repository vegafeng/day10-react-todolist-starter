// src/components/CompletedTodos.js
import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import './CompletedTodos.css';

const CompletedTodos = () => {
  const { state } = useContext(TodoContext);
  const completedTodos = state.filter(todo => todo.done);

  return (
    <div className="completed-todos">
      <h2>Completed Todos</h2>
      {completedTodos.length === 0 ? (
        <p>No completed tasks yet!</p>
      ) : (
        <ul>
          {completedTodos.map(({ id, text }) => (
            <li key={id} className="completed-todo-item">
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTodos;
