import { NavLink, Outlet } from "react-router";
import { Layout, Menu } from 'antd';
import { HomeOutlined, LoadingOutlined, SettingFilled } from '@ant-design/icons';
// import './DefaultLayOut.css';

const { Header, Footer, Content } = Layout;

const DefaultLayOut = () => {
    const items = [
        { label: <NavLink to="/">Home</NavLink>, key: 'home', icon: <HomeOutlined /> },
        { label: <NavLink to="/todos">To Do List</NavLink>, key: 'todos', icon: <LoadingOutlined /> },
        { label: <NavLink to="/about">About</NavLink>, key: 'about', icon: <SettingFilled /> },
    ];

    return (
        <Layout className="layout">
            <Header className="header">
                <Menu items={items} mode="horizontal" theme="dark" />
            </Header>
            <Content className="content">
                <Outlet />
            </Content>
            <Footer className="footer">
                <p>&copy; 2024 My Todo App</p>
            </Footer>
        </Layout>
    );
}

export default DefaultLayOut;
