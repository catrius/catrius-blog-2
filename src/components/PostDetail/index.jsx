import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import { IDLE, LOADING } from '@/constants';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PostDetail({ post, status }) {
  if (status === LOADING || status === IDLE) {
    // Todo: add loading
    return null;
  }

  const content = post.content.replaceAll('src="/', `src="${process.env.REACT_APP_API_URL}/`);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2>{post.title}</h2>
          <div className="mb-5">
            {post.category?.name && (
              <>
                <Link
                  to={`/category/${post.category.slug}`}
                  className="fw-semibold text-decoration-none text-muted"
                >
                  {post.category.name}
                </Link>
                <span className="text-muted">
                  {` — ${dayjs(post.created_at).format('LL')}`}
                </span>
              </>
            )}
          </div>
          <div>{parse(content)}</div>
        </Col>
      </Row>
    </Container>
  );
}

PostDetail.propTypes = {
  status: PropTypes.string.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
    created_at: PropTypes.string,
    content: PropTypes.string,
  }),
};

PostDetail.defaultProps = {
  post: {},
};

export default PostDetail;
