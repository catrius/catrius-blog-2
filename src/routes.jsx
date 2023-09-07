import React from 'react';
import Home from '@/pages/Home';
import Post from '@/pages/Post';
import Category from '@/pages/Category';
import Page from '@/pages/Page';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/post/:slug', element: <Post /> },
  { path: '/category/:slug', element: <Category /> },
  { path: '/page/:slug', element: <Page /> },
];

export default routes;
