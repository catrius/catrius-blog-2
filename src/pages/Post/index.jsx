import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '@/actions/apiActions';
import PostDetail from '@/components/PostDetail';

function Post() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(slug));
  }, [dispatch, slug]);

  return (
    <PostDetail status={post.status} post={post.data} />
  );
}

export default Post;
