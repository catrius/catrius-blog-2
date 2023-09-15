import React from 'react';
import { IDLE, LOADING } from '@/constants';
import { Link, useSearchParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Pagination from '@/components/Pagination';

function PostList({ posts, status, pageCount }) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  if (status === LOADING || status === IDLE) {
    // Todo: add loading
    return null;
  }

  return (
    <Container className="mt-5 post-list">
      <div className="row g-5">
        {posts.map((post) => (
          <div className="col-lg-4" key={post.slug}>
            <div className="d-block">
              <Link to={`/post/${post.slug}`} className="mb-4 d-block text-center">
                <Image
                  className="object-fit-cover"
                  src={post.thumbnail}
                  alt="thumbnail"
                  rounded
                  fluid
                />
              </Link>
              <div className="mb-1">
                <Link
                  to={`/category/${post.category.slug}`}
                  className="fw-semibold text-decoration-none text-muted"
                >
                  {post.category.name}
                </Link>
                <span className="text-muted">
                  {` — ${dayjs(post.created_at).format('LL')}`}
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
      <Pagination page={Number(page)} pageCount={pageCount} />
    </Container>
  );
}

PostList.propTypes = {
  status: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    thumbnail: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
    created_at: PropTypes.string,
    excerpt: PropTypes.string,
  })),
  pageCount: PropTypes.number,
};

PostList.defaultProps = {
  posts: [],
  pageCount: 1,
};

export default PostList;
