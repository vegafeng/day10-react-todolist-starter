import { use, useContext, useEffect } from "react";
import { getToDos } from "../apis/api";

export const initialState = [
  {id: 1, text: "the first todo", done: false},
  {id: 2, text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'Done':
      return state.map(todo => {
        if(action.id==todo.id) {
          const done = !todo.done;
          return {...todo, done: done};
        }
        return todo;
      });
    case 'Add':
      return [...state, {id: Date.now(), text: action.text, done: false}];
    case 'Delete':
      return state.filter(todo => todo.id != action.id);
    case 'LOAD_TODOS':
      return action.todos;
    default:
      return state;
  }
};
