import { combineReducers } from 'redux';
import {
  categoriesSlice, postSlice, postsSlice, pagesSlice, categorySlice,
} from '@/reducers/apiReducers';

export default combineReducers({
  post: postSlice.reducer,
  posts: postsSlice.reducer,
  categories: categoriesSlice.reducer,
  category: categorySlice.reducer,
  pages: pagesSlice.reducer,
});
