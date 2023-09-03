import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { getPost } from '@/actions/apiActions';

function Post() {
  const {slug} = useParams();
  const dispatch = useDispatch()
  const post = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(slug))
  }, [dispatch, slug])

  return (
    <Fragment>
      { post.status === 'succeeded' && (
        <div>
          <div>{post.data.title}</div>
          <div>{post.data.category}</div>
          <div>{post.data.created_at}</div>
          <div>{post.data.content}</div>
        </div>
      )}
    </Fragment>
  );
}

export default Post;
