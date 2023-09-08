import React from 'react';
import Home from '@/pages/Home';
import Post from '@/pages/Post';
import Category from '@/pages/Category';
import Page from '@/pages/Page';
import {
  CATEGORY, HOME, PAGE, POST,
} from '@/constants';

const routes = [
  { path: HOME, element: <Home /> },
  { path: POST, element: <Post /> },
  { path: CATEGORY, element: <Category /> },
  { path: PAGE, element: <Page /> },
];

export default routes;
