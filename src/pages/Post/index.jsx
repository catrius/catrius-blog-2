import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { getPost } from '@/actions/apiActions';
import { IDLE, LOADING } from '@/constants';

function Post() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(slug));
  }, [dispatch, slug]);

  if (post.status === LOADING || post.status === IDLE) {
    return (
      <div>Loading</div>
    );
  }

  const content = post.data.content.replaceAll('src="/', `src="${process.env.REACT_APP_API_URL}/`);

  return (
    <div>
      <div>{post.data.title}</div>
      <div>{post.data.category}</div>
      <div>{post.data.created_at}</div>
      <div>{parse(content)}</div>
    </div>
  );
}

export default Post;
