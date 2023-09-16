import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { POST_PROPTYPES } from '@/constants';

function PostContent({ post, isPost }) {
  return (
    <>
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
    </>
  );
}

PostContent.propTypes = {
  isPost: PropTypes.bool.isRequired,
  post: POST_PROPTYPES,
};

PostContent.defaultProps = {
  post: {},
};

export default PostContent;
