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
  const pageCount = category.data ? Math.ceil(category.data.count / PAGE_SIZE) : 1;
  const currentCategory = category.data?.results[0].category;

  useEffect(() => {
    dispatch(getCategory({ category: slug, page }));
  }, [slug, page]);

  return (
    <>
      <Helmet>
        <title>{currentCategory.name}</title>
      </Helmet>
      <PostList posts={currentCategory} status={category.status} pageCount={pageCount} />
    </>
  );
}

export default Category;
