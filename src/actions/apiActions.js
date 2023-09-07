import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPostAPI, getPostsAPI, getCategoriesAPI, getPagesAPI, getcategoryAPI, getPageAPI,
} from '@/api';

export const getPosts = createAsyncThunk(
  'getPosts',
  async () => {
    const response = await getPostsAPI();
    return response.data;
  },
);

export const getPost = createAsyncThunk(
  'getPost',
  async (slug) => {
    const response = await getPostAPI(slug);
    return response.data;
  },
);

export const getCategories = createAsyncThunk(
  'getCategories',
  async () => {
    const response = await getCategoriesAPI();
    return response.data;
  },
);

export const getcategory = createAsyncThunk(
  'getcategory',
  async (slug) => {
    const response = await getcategoryAPI(slug);
    return response.data;
  },
);

export const getPages = createAsyncThunk(
  'getPages',
  async () => {
    const response = await getPagesAPI();
    return response.data;
  },
);

export const getPage = createAsyncThunk(
  'getPage',
  async (slug) => {
    const response = await getPageAPI(slug);
    return response.data;
  },
);
