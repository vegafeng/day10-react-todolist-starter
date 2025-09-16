import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import './TodoList.css';
import { createToDo } from '../apis/api'; 

const AddToDoList = () => {
  const { dispatch } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
    
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const handleAdd = async () => {
    if (inputValue.trim().length === 0) return alert('Input is empty');

    const newToDo = {
      done: false,
      text: inputValue.trim()
    };

    try {
      const response = await createToDo(newToDo);

      dispatch({ type: 'Add',  text: inputValue.trim(), id: response.data.id, done: false }); 
      setInputValue('');
    } catch (error) {
      console.error('Error adding todo:', error);
      alert('Failed to add todo. Please try again.');
    }
  };

  return (
    <div className="input-container">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChangeInput} 
        onKeyPress={handleKeyPress}
        placeholder="Add a new todo..." 
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddToDoList;
