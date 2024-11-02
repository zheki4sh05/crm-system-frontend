import { useState } from 'react'
import Layout from './widgets/Layout';
import Page404 from './pages/Page404';
import Main from './pages/Main';
import PathConstants from './util/pathConstants';
import Deals from './pages/Deals';

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
