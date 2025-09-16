import { useContext, useEffect, useState } from "react";
import { getToDos, deleteToDo, updateToDo, updateToDoText } from "../apis/api";
import { TodoContext } from "../contexts/TodoContext"; 
import { Button, message, Modal } from 'antd';
import './TodoList.css';

const ToDoGroup = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null); 
  const [currentText, setCurrentText] = useState(""); 

  useEffect(() => {
    getToDos().then((response) => {
      dispatch({ type: 'LOAD_TODOS', todos: response.data });
      console.log(response.data);
    });
  }, [dispatch]);

  const handleClick = async (id) => {
    const todo = state.find(todo => todo.id === id);
    const { id: _, ...todoUpdate } = todo; // 去掉 id 属性
    todoUpdate.done = true;
    await updateToDo(id, todoUpdate);
    dispatch({ type: 'Done', id });
  };
  
  const handleClickDelete = async (id) => {
    await deleteToDo(id);
    dispatch({ type: 'Delete', id });
  };

  const handleClickUpdate = (id, text) => {
    setCurrentId(id);
    setCurrentText(text); 
    setIsModalOpen(true); 
  };

  const handleOk = async () => {
    console.log(currentId, currentText);
    if (currentId) {
      await updateToDoText(currentId, { text: currentText }).then(() => {
        message.success('Todo updated successfully');
        dispatch({ type: 'Update', id: currentId, text: currentText });
      }).catch((error) => {
        console.error('Error updating todo text:', error);
        message.error('Failed to update todo. Please make text not null.');
      });
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="todo-items-container">
        {state.map(({ text, done, id }) => (
          <div key={id} className="todo-item">
            <span className={`todo-text ${done ? 'done' : ''}`} onClick={() => handleClick(id)}>
              {text}
            </span>
            <Button type="primary" className="update-button" onClick={() => handleClickUpdate(id, text)}>Update</Button>
            <button className="delete-button" onClick={() => handleClickDelete(id)}>X</button>
          </div>
        ))}
      </div>

      <Modal
        title="Update ToDo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input 
          type="text" 
          value={currentText} 
          onChange={(e) => setCurrentText(e.target.value)} 
        />
      </Modal>
    </>
  );
};

export default ToDoGroup;
