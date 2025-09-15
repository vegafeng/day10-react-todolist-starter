// src/components/CompletedTodos.js
import React, { useContext, useState, useEffect } from 'react'; // 从 'react' 导入 useEffect
import { TodoContext } from '../contexts/TodoContext';
import './CompletedTodos.css'; // 确保引用正确的 CSS 文件
import { createToDo } from '../apis/api';
import { useNavigate } from 'react-router'; // 从 'react-router-dom' 导入 useNavigate

const CompletedTodos = () => {
    const { state, dispatch } = useContext(TodoContext); // 获取 state
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate(); // 创建 navigate 函数

    // 使用 useEffect 监听 state 的变化
    useEffect(() => {
        if (state.length !== 0) {
            navigate('/todos'); // 跳转到 todos 页面
        }
    }, [state, navigate]);

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleAdd = async () => {
        if (inputValue.trim().length === 0) return alert('Input is empty');
        const newToDo = {
            done: false, // 标记为已完成
            text: inputValue.trim()
        };
        const response = await createToDo(newToDo);
        dispatch({ type: 'Add', todos: response.data });
        setInputValue('');
    };

    // const completedTodos = state.todos;

    return (
        <div className="completed-todos">
            <h2>Completed Todos</h2>
            {state.length === 0 ? (
                <>
                    <p>No completed tasks yet!</p>
                    <div className="input-container">
                        <input 
                            type="text" 
                            value={inputValue} 
                            onChange={handleChangeInput} 
                            placeholder="Add a new todo..." 
                        />
                        <button onClick={handleAdd}>Add</button>
                    </div>
                </>
            ) : (
               <></>
            )}
        </div>
    );
};

export default CompletedTodos;
