import { createAPISlice } from '@/reducers/helpers';
import {
  getCategories, getCategory, getPages, getPost, getPosts, getPage, getHighlightPosts, postComment,
} from '@/actions/apiActions';

export const postSlice = createAPISlice('post', getPost);
export const postsSlice = createAPISlice('posts', getPosts);
export const categoriesSlice = createAPISlice('posts', getCategories);
export const categorySlice = createAPISlice('category', getCategory);
export const pagesSlice = createAPISlice('pages', getPages);
export const pageSlice = createAPISlice('page', getPage);
export const highlightPostsSlice = createAPISlice('highlightPosts', getHighlightPosts);
export const postCommentSlice = createAPISlice('postComment', postComment);
