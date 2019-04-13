import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-week.herokuapp.com',
});

export default api;
