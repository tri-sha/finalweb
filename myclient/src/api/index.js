import axios from 'axios';

const API = axios.create({baseURL : 'http://localhost:5005'})

export const fetchPosts = () => API.get('/product');
export const createPost = (newpost) => API.post('/product');

export const login= (formData) => API.post('/user/login',formData);

export const register = (formData) => API.post('/user/register',formData);
