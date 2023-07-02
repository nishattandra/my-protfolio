import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Main from './layout/Main';
import About from './sections/About/About';
import Home from './sections/Home/Home';
import ErrorPage from './sections/ErrorPage/ErrorPage';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/skills',
        element:<Skills></Skills>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
