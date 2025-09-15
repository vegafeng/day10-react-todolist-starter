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

