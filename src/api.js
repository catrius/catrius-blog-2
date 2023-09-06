import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

export const getPostAPI = async (slug) => axiosInstance.get(`posts/${slug}/`);
export const getPostsAPI = async () => axiosInstance.get('posts/');
export const getCategoriesAPI = async () => axiosInstance.get('categories/');
export const getcategoryAPI = async (slug) => axiosInstance.get(`categories/${slug}/`);
export const getPagesAPI = async () => axiosInstance.get('pages/');
