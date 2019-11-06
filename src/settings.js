import axios from 'axios';

const randomUserInstance = axios.create({
    baseURL: 'https://randomuser.me/api'
});

export {
    randomUserInstance,
};