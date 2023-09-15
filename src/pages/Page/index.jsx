import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '@/actions/apiActions';
import PostDetail from '@/components/PostDetail';
import { pageSlice } from '@/reducers/apiReducers';
import { Helmet } from 'react-helmet';

function Page() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(getPage(slug));
    return () => {
      dispatch(pageSlice.actions.clear());
    };
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{page.data?.title}</title>
      </Helmet>
      <PostDetail status={page.status} post={page.data} />
    </>
  );
}

export default Page;
