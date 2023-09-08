import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

export const getPostsAPI = async (page) => axiosInstance.get('posts/', { params: { page } });
export const getPostAPI = async (slug) => axiosInstance.get(`posts/${slug}/`);
export const getCategoriesAPI = async () => axiosInstance.get('categories/');
export const getcategoryAPI = async (slug) => axiosInstance.get(`categories/${slug}/`);
export const getPagesAPI = async () => axiosInstance.get('pages/');
export const getPageAPI = async (slug) => axiosInstance.get(`pages/${slug}/`);
