import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getPostsAPI = async (page) => axiosInstance.get('posts/', { params: { page } });
export const getPostAPI = async (slug) => axiosInstance.get(`posts/${slug}/`);
export const getCategoriesAPI = async () => axiosInstance.get('categories/');
export const getcategoryAPI = async (slug, page) => axiosInstance.get(`posts?category=${slug}`, { params: { page } });
export const getPagesAPI = async () => axiosInstance.get('pages/');
export const getPageAPI = async (slug) => axiosInstance.get(`pages/${slug}/`);
