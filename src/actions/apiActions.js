import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPostAPI } from '@/api';

export const getPost = createAsyncThunk(
  'getPost',
  async (slug) => {
    const response = await getPostAPI(slug);
    return response.data;
  },
);
