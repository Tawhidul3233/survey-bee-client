import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import DashboardPrimaryPage from "../pages/Dashboard/DashboardPrimaryPage";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import SurveyAudience from "../pages/SurveyAudience/SurveyAudience";
import RequireRoutes from "./RequireRoutes";

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
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RequireRoutes>
        <Dashboard />
      </RequireRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPrimaryPage />,
      },
    ],
  },
]);
