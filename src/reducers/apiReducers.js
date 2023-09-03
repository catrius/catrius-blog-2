import { createAPISlice } from '@/reducers/helpers';
import { getPost } from '@/actions/apiActions';

export const postSlice = createAPISlice('post', getPost);
