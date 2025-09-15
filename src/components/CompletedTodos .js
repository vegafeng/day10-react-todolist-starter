// src/components/CompletedTodos.js
import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Input, Button, List, Typography, Spin } from 'antd'; // 引入 Ant Design 组件
import { PlusCircleOutlined } from '@ant-design/icons'; // 引入图标
import './CompletedTodos.css';
import { createToDo } from '../apis/api'; // 假设 createToDo 是创建待办事项的函数

const CompletedTodos = () => {
    const { state, dispatch } = useContext(TodoContext);
    const [inputValue, setInputValue] = useState('');

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleAdd = async () => {
        if (inputValue.trim().length === 0) return alert('Input is empty');
        const newToDo = {
            done: false,
            text: inputValue.trim()
        };
        
        // 模拟 API 请求
        const response = await createToDo(newToDo);
        dispatch({ type: 'Add', todos: response.data });
        setInputValue('');
    };

    return (
        <div className="completed-todos">
            <Typography.Title level={2}>Completed Todos</Typography.Title>
            {state.length === 0 ? (
                <>
                    <Typography.Text>No completed tasks yet!</Typography.Text>
                    <div className="input-container">
                        <Input 
                            value={inputValue} 
                            onChange={handleChangeInput} 
                            placeholder="Add a new todo..." 
                            style={{ width: '70%', marginRight: '10px' }} 
                        />
                        <Button 
                            type="primary" 
                            icon={<PlusCircleOutlined />} 
                            onClick={handleAdd}
                        >
                            Add
                        </Button>
                    </div>
                </>
            ) : (
                <List
                    className="completed-todo-list"
                    bordered
                    dataSource={state.filter(todo => todo.done)}
                    renderItem={item => (
                        <List.Item className="completed-todo-item">
                            <Typography.Text>{item.text}</Typography.Text>
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
};

export default CompletedTodos;
