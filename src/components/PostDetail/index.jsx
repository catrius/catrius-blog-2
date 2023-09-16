import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import { IDLE, LOADING } from '@/constants';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

function PostDetail({ post, status }) {
  if (status === LOADING || status === IDLE) {
    // Todo: add loading
    return null;
  }
  const isPost = Boolean(post.category);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2>{post.title}</h2>
          <div className="mb-4">
            { isPost && (
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
          <div className={classnames('mb-4 pb-4', { 'border-bottom': isPost })}>
            { parse(post.content) }
          </div>
          { isPost && (
            <div>
              <h4 className="mb-4">
                {`${post.comments?.length || 0} Comments`}
              </h4>
              {post.comments.map((comment) => (
                <div className="mb-5">
                  <h5>{comment.commenter}</h5>
                  <p className="text-muted mb-3">
                    {dayjs(comment.created_at).format('LL')}
                  </p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          )}
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
    comments: PropTypes.arrayOf(PropTypes.shape({
      commenter: PropTypes.string,
      content: PropTypes.string,
      updated_at: PropTypes.string,
    })),
  }),
};

PostDetail.defaultProps = {
  post: {},
};

export default PostDetail;
