import React, { useEffect } from 'react';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { getComments } from '@/actions/apiActions';
import { useDispatch, useSelector } from 'react-redux';
import { commentsSlice } from '@/reducers/apiReducers';

function CommentList({ postSlug }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComments({ post: postSlug }));
    return () => {
      dispatch(commentsSlice.actions.clear());
    };
  }, [postSlug]);

  return (
    <div className="mb-4 border-bottom">
      <h4 className="mb-4">
        {`${comments.data?.count || 0} Comments`}
      </h4>
      {comments.data?.results.map((comment) => (
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
  postSlug: PropTypes.string,
};

CommentList.defaultProps = {
  postSlug: null,
};

export default CommentList;
