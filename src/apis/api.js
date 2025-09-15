import axios from "axios";

const instance = axios.create({
    baseURL: 'https://68c78c8d5d8d9f51473222ab.mockapi.io/api/'
});
export const getToDos = async () => {
    return await instance.get('/todos');
}

export const createToDo = async (todo) => {
    return await instance.post('/todos', todo);
}
export const deleteToDo = async (id) => {
    console.log(id);
    return await instance.delete(`/todos/${id}`);
};

export const updateToDo = async (id, todo) => {
    todo = { done: true };
    return await instance.put(`/todos/${id}`, todo);
}

export const updateToDoText = async (id, todo) => {
    return await instance.put(`/todos/${id}`, todo);
}
