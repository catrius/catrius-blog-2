import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '@/actions/apiActions';
import PostDetail from '@/components/PostDetail';
import { Helmet } from 'react-helmet';

function Post() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(slug));
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{post.data?.title}</title>
      </Helmet>
      <PostDetail status={post.status} post={post.data} />
    </>
  );
}

export default Post;
