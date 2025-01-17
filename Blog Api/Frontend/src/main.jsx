import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Blog from "./Blog.jsx";
import UpdateComment from "./updateComment.jsx";
import AddComment from "./addComment.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },  
      {
        path: "/blog/:blogId",
        element: <Blog />
      }, 
      {
        path: "/comment/:commentId/update",
        element: <UpdateComment />
      },
      {
        path: "/blog/:blogId/comment",
        element: <AddComment />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
