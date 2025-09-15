import { useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers/todoReducer";
import { TodoContext } from "./contexts/TodoContext";
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router";
import  DefaultLayOut  from "./layout/DefaultLayOut";
import HomePage from "./components/HomePage";
import CompletedTodos from "./components/CompletedTodos ";
import DoneTodos from "./components/DoneTodos";
import About from "./components/About";

function ToDoDetail(){
  const {key}=useParams();
  console.log(key);
  return <div>This is:  {key} Detail</div>
}

function ErrorPage() {
  return (
    <div>
      <h2>Page Not Found</h2> 
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}


const routes = [
  {
    path: '/',
    element: <DefaultLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'todos',
        element: <TodoList />
      },
      {
        path: 'todos/:key',
        element: <ToDoDetail />
      },
      {
        path: 'completed',
        element: <CompletedTodos /> 
      },
      {
        path: 'done',
        element: <DoneTodos /> 
      }

    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const value = {state, dispatch};

  return (
    <div className="App">
      <TodoContext.Provider value={value}>
         <RouterProvider router={router} />

      </TodoContext.Provider>
    </div>
  );
}

export default App;
