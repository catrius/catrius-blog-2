import React from 'react';
import Home from './pages/Home';
import Post from './pages/Post';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/post/:slug', element: <Post /> },
];

export default routes;
