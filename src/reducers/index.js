import { combineReducers } from 'redux';
import { postSlice, postsSlice } from '@/reducers/apiReducers';

export default combineReducers({
  post: postSlice.reducer,
  posts: postsSlice.reducer,
});
