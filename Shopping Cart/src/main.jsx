import { createRoot } from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import Shop from './shop.jsx';
import Home from './home.jsx';
import Layout from './layout.jsx';
import ErrorPage from './errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
    
          {
            path: "/shop",
            element: <Shop />,
          },
          
          {
            path: "*",
            element: <ErrorPage />,
          },
        ]
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
