import { useState } from 'react'
import Page404 from './pages/Page404';
import Main from './pages/Main';

import Deals from './pages/Deals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './processes/Layout';
import PathConstants from './shared/pathConstants';
import Tasks from './pages/Tasks';
import Docs from './pages/Docs';
import Customers from './pages/Customers';
import Workers from './pages/Workers';

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      errorElement: <Page404 />,
      children: [
        {
          path: PathConstants.HOME,
          element: <Main />,
        },
        {
          path: PathConstants.DEALS,
          element: <Deals />,
        },
        {
          path: PathConstants.DOCS,
          element: <Docs />,
        },
        {
          path: PathConstants.CUSTOMER,
          element: <Customers/>,
        },
        {
          path: PathConstants.WORKERS,
          element: <Workers/>,
        },
      
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
