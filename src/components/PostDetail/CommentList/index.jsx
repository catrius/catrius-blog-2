import React from 'react';
import { COMMENT_PROPTYPES } from '@/constants';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';

function CommentList({ comments }) {
  return (
    <div className="mb-4 border-bottom">
      <h4 className="mb-4">
        {`${comments?.length || 0} Comments`}
      </h4>
      {comments.map((comment) => (
        <div className="mb-5" key={comment.id}>
          <h5>{comment.commenter}</h5>
          <p className="text-muted mb-3">
            {dayjs(comment.created_at).format('LL')}
          </p>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(COMMENT_PROPTYPES),
};

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
