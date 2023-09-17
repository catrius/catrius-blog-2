import React from 'react';
import { IDLE, LOADING, POST_PROPTYPES } from '@/constants';
import { Link, useSearchParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
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
      <Row className="g-5">
        {posts.map((post) => (
          <Col lg={4} md={6} key={post.slug}>
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
              { post.comment_count ? (
                <div className="text-end text-muted small">
                  {`${post.comment_count} 💬`}
                </div>
              ) : null}
            </div>
          </Col>
        ))}
      </Row>
      <Pagination page={Number(page)} pageCount={pageCount} />
    </Container>
  );
}

PostList.propTypes = {
  status: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(POST_PROPTYPES),
  pageCount: PropTypes.number,
};

PostList.defaultProps = {
  posts: [],
  pageCount: 1,
};

export default PostList;
