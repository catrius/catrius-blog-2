import { createAPISlice } from '@/reducers/helpers';
import {
  getCategories, getcategory, getPages, getPost, getPosts, getPage,
} from '@/actions/apiActions';

export const postSlice = createAPISlice('post', getPost);
export const postsSlice = createAPISlice('posts', getPosts);
export const categoriesSlice = createAPISlice('posts', getCategories);
export const categorySlice = createAPISlice('category', getcategory);
export const pagesSlice = createAPISlice('pages', getPages);
export const pageSlice = createAPISlice('page', getPage);
