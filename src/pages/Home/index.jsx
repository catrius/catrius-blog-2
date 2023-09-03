import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '@/actions/apiActions';
import { IDLE, LOADING } from '@/constants';

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (posts.status === LOADING || posts.status === IDLE) {
    return (
      <div>Loading</div>
    );
  }
  console.log(posts);

  return (
    <div>
      {posts.data.map((post) => (
        <div>
          <div>{post.title}</div>
          <div>{post.category}</div>
          <div>{post.created_at}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
