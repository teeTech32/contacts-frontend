import axios from 'axios';

const api = axios.create({
  baseURL:'https://contacts-backend-w5bb.onrender.com',
})

export default api;
