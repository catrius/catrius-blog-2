import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '@/actions/apiActions';
import PostList from '@/components/PostList';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '@/constants';
import PostHighlight from '@/components/PostHighlight';

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const pageCount = posts.data ? Math.ceil(posts.data.count / PAGE_SIZE) : 1;

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page]);

  return (
    <>
      <PostHighlight />
      <PostList posts={posts.data?.results} status={posts.status} pageCount={pageCount} />
    </>
  );
}

export default Home;
