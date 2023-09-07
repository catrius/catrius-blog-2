import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '@/actions/apiActions';
import PostDetail from '@/components/PostDetail';
import { pageSlice } from '@/reducers/apiReducers';

function Page() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(getPage(slug));
    return () => {
      dispatch(pageSlice.actions.clear());
    };
  }, [dispatch, slug]);

  return (
    <PostDetail status={page.status} post={page.data} />
  );
}

export default Page;
