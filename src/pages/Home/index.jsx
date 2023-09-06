import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '@/actions/apiActions';
import { IDLE, LOADING } from '@/constants';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

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
      <div className="container">
        <div className="row g-5">
          {posts.data.map((post) => (
            <div className="col-lg-4">
              <div className="d-block">
                <Link to={`/post/${post.slug}`} className="mb-4 d-block">
                  <Image
                    className="object-fit-cover"
                    src={post.thumbnail}
                    alt="thumbnail"
                    width={340}
                    height={218}
                    rounded
                  />
                </Link>
                <div className="mb-1">
                  <span className="fw-semibold">{post.category}</span>
                  {' '}
                  <span className="text-muted">
                    {`— ${dayjs(post.created_at).format('LL')}`}
                  </span>
                </div>
                <Link
                  className="d-block text-decoration-none text-dark fw-bold mb-3"
                  to={`/post/${post.slug}`}
                >
                  <h5>{post.title}</h5>
                </Link>
                <p className="text-muted">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
