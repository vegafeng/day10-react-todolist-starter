import { useContext, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';
import ToDoGroup from './ToDoGroup';
import AddToDoList from './AddToDoList';
import { useNavigate } from 'react-router'; 

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext); 
  const navigate = useNavigate(); 
  useEffect(() => {
    if (state.length === 0) {
      navigate('/completed'); 
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
