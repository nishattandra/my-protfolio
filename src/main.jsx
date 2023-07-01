import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Main from './layout/Main';
import About from './sections/About/About';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
