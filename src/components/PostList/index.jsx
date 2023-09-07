import React from 'react';
import { IDLE, LOADING } from '@/constants';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function PostList({ posts, status }) {
  if (status === LOADING || status === IDLE) {
    // Todo: add loading
    return null;
  }

  return (
    <Container className="mt-5">
      <div className="row g-5">
        {posts.map((post) => (
          <div className="col-lg-4" key={post.slug}>
            <div className="d-block">
              <Link to={`/post/${post.slug}`} className="mb-4 d-block">
                <Image
                  className="object-fit-cover img-fluid"
                  src={post.thumbnail}
                  alt="thumbnail"
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
    </Container>
  );
}

PostList.propTypes = {
  status: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    thumbnail: PropTypes.string,
    category: PropTypes.string,
    created_at: PropTypes.string,
    excerpt: PropTypes.string,
  })),
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;