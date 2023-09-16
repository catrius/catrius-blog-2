import React, { useEffect } from 'react';
import dayjs from '@/vendors/dayjs';
import PropTypes from 'prop-types';
import { getComments } from '@/actions/apiActions';
import { useDispatch, useSelector } from 'react-redux';
import { commentsSlice } from '@/reducers/apiReducers';
import Pagination from '@/components/Pagination';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '@/constants';

function CommentList({ postSlug }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const pageCount = comments.data ? Math.ceil(comments.data.count / PAGE_SIZE) : 1;

  useEffect(() => {
    dispatch(getComments({ post: postSlug, page }));
  }, [postSlug, page]);

  useEffect(() => () => {
    dispatch(commentsSlice.actions.clear());
  }, []);

  return (
    <div className="mb-4 pb-4 border-bottom">
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
      <Pagination page={Number(page)} pageCount={pageCount} />
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
