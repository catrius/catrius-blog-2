import { combineReducers } from 'redux';
import { postSlice } from '@/reducers/apiReducers';

export default combineReducers({
  post: postSlice.reducer,
})
