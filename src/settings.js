import axios from 'axios';

const RANDOM_USER_URL = 'https://randomuser.me/api';

export const randomUserInstance = axios.create({
    baseURL: RANDOM_USER_URL
});