import { useState } from 'react'
import Page404 from './pages/Page404';
import Main from './pages/Main';

import Deals from './pages/Deals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './processes/Layout';
import PathConstants from './shared/pathConstants';
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
      
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
