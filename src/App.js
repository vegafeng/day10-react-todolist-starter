import { useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers/todoReducer";
import { TodoContext } from "./contexts/TodoContext";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Outlet,
  useParams
} from "react-router";

function DefaultLayOut() {
  return (
    <>
      <header>
        <h1>My Todo List</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/todos">To Do List</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>.
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>&copy; 2024 My Todo App</p>
      </footer>
    </>
  );
}



const routes = [
  {
    path: '/',
    element: <DefaultLayOut />,
    children: [
      {
        path: '',
        element: <h2>Home Page</h2>
      },
      {
        path: 'about',
        element: <h2>About Page</h2>
      }
    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  // the Hooks API manage component data state
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const value = {state, dispatch};

  return (
    <div className="App">
      <TodoContext.Provider value={value}>
        {/* <TodoList/> */}
         <RouterProvider router={router} />

      </TodoContext.Provider>
    </div>
  );
}

export default App;
