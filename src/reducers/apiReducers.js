import { createAPISlice } from '@/reducers/helpers';
import { getPost, getPosts } from '@/actions/apiActions';

export const postSlice = createAPISlice('post', getPost);
export const postsSlice = createAPISlice('posts', getPosts);
