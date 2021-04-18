import axios from 'axios';

const url = "http://localhost:5005/product/";

export const fetchPosts = () => {return axios.get(url);}
export const createPost = (newpost) => axios.post(url,newpost);