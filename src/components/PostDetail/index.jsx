import React from 'react';
import {
  IDLE, LOADING, POST_PROPTYPES,
} from '@/constants';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import PostContent from '@/components/PostDetail/PostContent';
import CommentList from '@/components/PostDetail/CommentList';
import CommentForm from '@/components/PostDetail/CommentForm';

function PostDetail({ post, status, isPost }) {
  if (status === LOADING || status === IDLE) {
    // Todo: add loading
    return null;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <PostContent post={post} isPost={isPost} />
          { isPost && <CommentList comments={post.comments} />}
          { isPost && <CommentForm postId={post.id} />}
        </Col>
      </Row>
    </Container>
  );
}

PostDetail.propTypes = {
  status: PropTypes.string.isRequired,
  post: POST_PROPTYPES,
  isPost: PropTypes.bool,
};

PostDetail.defaultProps = {
  post: {},
  isPost: true,
};

export default PostDetail;
