import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import routes from '@/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';

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
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
