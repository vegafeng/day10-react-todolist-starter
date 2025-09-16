export const initialState = [
  {id: 1, text: "the first todo", done: false},
  {id: 2, text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'Done':
      return state.map(todo => {
        if(action.id === todo.id) {
          const done = !todo.done;
          return {...todo, done: done};
        }
        return todo;
      }).sort((a, b) => b.id - a.id); // 按照 id 倒序排序

    case 'Add':
      return [...state, {text: action.text, done: false, id: action.id}]
        .sort((a, b) => b.id - a.id); // 按照 id 倒序排序

    case 'Delete':
      return state.filter(todo => todo.id !== action.id)
        .sort((a, b) => b.id - a.id); // 按照 id 倒序排序

    case 'LOAD_TODOS':
      return action.todos.sort((a, b) => b.id - a.id); // 按照 id 倒序排序

    case 'Update':
      return state.map(todo => {
        if(action.id === todo.id) {
          return {...todo, text: action.text};
        }
        return todo;
      }).sort((a, b) => b.id - a.id); // 按照 id 倒序排序

    default:
      return state;
  }
};
