
import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Input, Button, List, Typography, Spin } from 'antd'; 
import { PlusCircleOutlined } from '@ant-design/icons'; 
import './CompletedTodos.css';
import { createToDo } from '../apis/api'; 

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
