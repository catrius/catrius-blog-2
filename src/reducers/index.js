import { combineReducers } from 'redux';
import {
  categoriesSlice, postSlice, postsSlice, pagesSlice, categorySlice, pageSlice, highlightPostsSlice,
} from '@/reducers/apiReducers';

export default combineReducers({
  posts: postsSlice.reducer,
  post: postSlice.reducer,
  categories: categoriesSlice.reducer,
  category: categorySlice.reducer,
  pages: pagesSlice.reducer,
  page: pageSlice.reducer,
  highlightPosts: highlightPostsSlice.reducer,
});
