import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});
export const getToDos = async () => {
    return await instance.get('/todos');
}

export const createToDo = async (todo) => {
    return await instance.post('/todos', todo);
}
export const deleteToDo = async (id) => {
    // console.log(id);
    return await instance.delete(`/todos/${id}`);
};

export const updateToDo = async (id, todo) => {
    // todo = { done: true };
    // todo.done = true;
    return await instance.put(`/todos/${id}`, todo);
}

export const updateToDoText = async (id, todo) => {
    return await instance.put(`/todos/${id}`, todo);
}
instance.interceptors.request.use(config => {
    console.log('Request Config:', config);
    config.metadata = { startTime: new Date() };
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(config => {
console.log('Response Config:', config);
config.metadata = { ...config.metadata, endTime: new Date() };
config.duration = config.metadata.endTime - config.metadata.startTime;
console.log(`Request duration: ${config.duration} ms`);


if (config.url === '/todos/error') {
        return Promise.reject({
            response: {
                status: 500,
                data: { message: 'Internal Server Error' }
            }
        });
    }


return config;
},error=>{
    
    const { status, data } = error.response;
    console.error(`Error Status: ${status}`);
    console.error('Error Data:', data);
    if (status === 404) {
        // alert('Resource not found (404)');
        window.location.href = '/';
    } else if (status === 500) {
        alert('Server error (500)');
    }
    return Promise.reject(error);
})
