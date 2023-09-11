import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import { IDLE, LOADING } from '@/constants';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function PostDetail({ post, status }) {
  if (status === LOADING || status === IDLE) {
    // Todo: add loading
    return null;
  }

  const content = post.content.replaceAll('src="/', `src="${process.env.REACT_APP_API_URL}/`);

  return (
    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2>{post.title}</h2>
          <div className="mb-5">
            {post.category && (
              <>
                <span className="fw-semibold">{post.category}</span>
                {' '}
                <span className="text-muted">
                  {`— ${dayjs(post.created_at).format('LL')}`}
                </span>
              </>
            )}
          </div>
          <div>{parse(content)}</div>
        </div>
      </div>
    </Container>
  );
}

PostDetail.propTypes = {
  status: PropTypes.string.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    created_at: PropTypes.string,
    content: PropTypes.string,
  }),
};

PostDetail.defaultProps = {
  post: {},
};

export default PostDetail;
