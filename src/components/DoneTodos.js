// src/components/DoneTodos.js
import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { List, Typography } from 'antd'; // 引入 Ant Design 组件
import './DoneTodos.css'; // 引入 CSS 文件

const DoneTodos = () => {
  const { state } = useContext(TodoContext); // 获取待办事项的状态

  // 过滤出已完成的待办事项
  const completedTodos = state.filter(todo => todo.done);

  return (
    <div className="done-todos">
      <Typography.Title level={2}>Completed Todos</Typography.Title>
      {completedTodos.length === 0 ? (
        <Typography.Text>No completed tasks yet!</Typography.Text>
      ) : (
        <List
          bordered
          dataSource={completedTodos}
          renderItem={item => (
            <List.Item>
              <Typography.Text>{item.text}</Typography.Text>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default DoneTodos;
