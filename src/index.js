import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import './index.css'
import App from './App';
import Explore from './Explore';
import Library from './Library';
import Notification from './Notification';
import Account from './Account';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <redirect to='/' />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/library',
    element: <Library />,
  },
  {
    path: '/notification',
    element: <Notification />,
  },
  {
    path: '/account',
    element: <Account />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
