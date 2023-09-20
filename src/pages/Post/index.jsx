import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '@/actions/apiActions';
import PostDetail from '@/components/PostDetail';
import { Helmet } from 'react-helmet';

function Post() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);
  const post = postState?.data || {};

  useEffect(() => {
    dispatch(getPost(slug));
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <PostDetail status={postState.status} post={post} />
    </>
  );
}

export default Post;
