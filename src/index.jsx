import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import routes from '@/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';
import '@/styles.scss';
import { Helmet } from 'react-helmet';
import './i18n';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Helmet>
        <title>Catrius Blog 2.0</title>
      </Helmet>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
