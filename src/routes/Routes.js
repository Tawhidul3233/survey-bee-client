import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import SurveyAudience from "../pages/SurveyAudience/SurveyAudience";

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
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/survey-Audience/:title/:id",
        loader: ({ params }) =>
          fetch(
            `https://survey-bee-server.vercel.app/specificSurveyAudience/${params.title}/${params.id}`
          ),

        element: <SurveyAudience />,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>
      }
    ],
  },
]);
