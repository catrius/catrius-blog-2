import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '@/actions/apiActions';
import PostList from '@/components/PostList';
import { useParams, useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '@/constants';
import { Helmet } from 'react-helmet';

function Category() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const pageCount = category.data ? Math.ceil(category.data.count / PAGE_SIZE) : 0;

  useEffect(() => {
    dispatch(getCategory(slug, page));
  }, [slug, page]);

  return (
    <>
      <Helmet>
        <title>{category.data?.results[0].category.name}</title>
      </Helmet>
      <PostList posts={category.data?.results} status={category.status} pageCount={pageCount} />
    </>
  );
}

export default Category;
