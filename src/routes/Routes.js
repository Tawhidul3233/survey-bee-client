import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";


export const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path:'/Register',
        element: <Register></Register>
      },
      {
        path:'/login',
        element: <Login></Login>
      }
    ],
  },
]);
