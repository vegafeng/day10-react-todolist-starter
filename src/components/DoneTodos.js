import { useContext, useEffect, useRef } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { List, Typography } from 'antd'; 
import './DoneTodos.css'; 

const DoneTodos = () => {
  const { state } = useContext(TodoContext); 
  const glowContainerRef = useRef(null);
  
  
  useEffect(() => {
    if (!glowContainerRef.current) return;
    
    
    const glowCount = 4;
    for (let i = 0; i < glowCount; i++) {
      const glow = document.createElement('div');
      glow.className = 'background-glow';
      
      
      glow.style.top = `${Math.random() * 100}%`;
      glow.style.left = `${Math.random() * 100}%`;
      glow.style.width = `${Math.random() * 300 + 200}px`;
      glow.style.height = `${Math.random() * 300 + 200}px`;
      glow.style.animationDelay = `${Math.random() * 5}s`;
      glow.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      glowContainerRef.current.appendChild(glow);
    }
  }, []);
  
  const completedTodos = state.filter(todo => todo.done);

  return (
    <div className="done-todos-container">
      {}
      <div className="glow-container" ref={glowContainerRef}></div>
      
      <div className="done-todos">
        <Typography.Title level={2} className="section-title">
          Completed Todos
        </Typography.Title>
        
        {completedTodos.length === 0 ? (
          <div className="empty-state">
            <Typography.Text>No completed tasks yet!</Typography.Text>
          </div>
        ) : (
          <List
            bordered
            dataSource={completedTodos}
            renderItem={(item, index) => (
              <List.Item className="todo-item" key={item.id || index}>
                <div className="todo-content">
                  <Typography.Text>{item.text}</Typography.Text>
                  <div className="shine-effect"></div>
                </div>
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default DoneTodos;
    