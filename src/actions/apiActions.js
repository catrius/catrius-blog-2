import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPostAPI, getPostsAPI } from '@/api';

export const getPost = createAsyncThunk(
  'getPost',
  async (slug) => {
    const response = await getPostAPI(slug);
    return response.data;
  },
);

export const getPosts = createAsyncThunk(
  'getPosts',
  async () => {
    const response = await getPostsAPI();
    return response.data;
  },
);
