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
        <meta name="description" content={post.excerpt || ''} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        <meta property="og:image" content={post.thumbnail} />
        <meta property="og:url" content={`https://catri.us/post/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <PostDetail status={postState.status} post={post} />
    </>
  );
}

export default Post;
