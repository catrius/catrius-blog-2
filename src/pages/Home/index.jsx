import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '@/actions/apiActions';
import { IDLE, LOADING } from '@/constants';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      {posts.data.map((post) => (
        <Link to={`/post/${post.slug}`}>
          {post.thumbnail && <img src={post.thumbnail} alt="thumbnail" />}
          <div>{post.title}</div>
          <div>{post.category}</div>
          <div>{post.created_at}</div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
