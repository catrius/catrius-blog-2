import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { getPost } from '@/actions/apiActions';
import { IDLE, LOADING } from '@/constants';
import dayjs from '@/vendors/dayjs';

function Post() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(slug));
  }, [dispatch, slug]);

  if (post.status === LOADING || post.status === IDLE) {
    // Todo: add loading
    return null;
  }

  const content = post.data.content.replaceAll('src="/', `src="${process.env.REACT_APP_API_URL}/`);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center">{post.data.title}</h2>
          <div className="mb-5 text-center">
            <span className="fw-semibold">{post.data.category}</span>
            {' '}
            <span className="text-muted">
              {`— ${dayjs(post.data.created_at).format('LL')}`}
            </span>
          </div>
          <div>{parse(content)}</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
