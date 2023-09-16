import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPostAPI, getPostsAPI, getCategoriesAPI, getPagesAPI, getPageAPI, postCommentAPI,
} from '@/api';

export const getPosts = createAsyncThunk(
  'getPosts',
  async (page) => {
    const response = await getPostsAPI({ page });
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

export const getCategory = createAsyncThunk(
  'getCategory',
  async (slug, page) => {
    const response = await getPostsAPI({ category: slug, page });
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

export const getHighlightPosts = createAsyncThunk(
  'getHighlightPosts',
  async () => {
    const response = await getPostsAPI({ highlight: true });
    return response.data;
  },
);

export const postComment = createAsyncThunk(
  'postComment',
  async (params) => {
    const response = await postCommentAPI(params);
    return response.data;
  },
);
