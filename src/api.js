import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getPostsAPI = async (params) => axiosInstance.get('posts/', { params });
export const getPostAPI = async (slug) => axiosInstance.get(`posts/${slug}/`);
export const getCategoriesAPI = async () => axiosInstance.get('categories/');
export const getPagesAPI = async () => axiosInstance.get('pages/');
export const getPageAPI = async (slug) => axiosInstance.get(`pages/${slug}/`);
