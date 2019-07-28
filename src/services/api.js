import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarbere.herokuapp.com/',
});

export default api;
