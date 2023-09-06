import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcategory } from '@/actions/apiActions';
import PostList from '@/components/PostList';
import { useParams } from 'react-router-dom';

function Category() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getcategory(slug));
  }, [dispatch, slug]);

  return (
    <PostList posts={category.data?.posts} status={category.status} />
  );
}

export default Category;
