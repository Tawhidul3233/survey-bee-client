import { createBrowserRouter } from "react-router-dom";
import AdminPrimaryPage from "../components/Dashboard/AdminContents/AdminPrimaryPage";
import AdminHome from "../components/Dashboard/AdminContents/ManageUser/AdminHome/AdminHome";
import ManageUser from "../components/Dashboard/AdminContents/ManageUser/ManageUser";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import ApplyPage from "../pages/ApplyPage/ApplyPage";
import CustomerService from "../pages/CustomerService/CustomerService";
import Cx from "../pages/CxPage/Cx";
import CreateASurvey from "../pages/Dashboard/CreateASurvey";
import DashboardPrimaryPage from "../pages/Dashboard/DashboardPrimaryPage";
import MySurveys from "../pages/Dashboard/MySurveys";
import PreviewSurvey from "../pages/Dashboard/PreviewSurvey";
import SurveyCreateForm from "../pages/Dashboard/SurveyCreateForm";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import SurveyAudience from "../pages/SurveyAudience/SurveyAudience";
import SurveyTemplate from "../pages/SurveyTemplate/SurveyTemplate";
import SurveyTips from "../pages/SurveyTips/SurveyTips";
import AdminRoutes from "./AdminRoutes";
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
        path: "/apply",
        element: <ApplyPage> </ApplyPage>,
      },
      {
        path: "/CustomerService",
        element: <CustomerService />,
      },
      {
        path: "/cx",
        element: <Cx> </Cx>,
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
        path: "/surveyTemplate/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/surveyTemplate/${params.id}`),
        element: <SurveyTemplate />,
      },
      {
        path: "/plans-pricing",
        element: <Pricing></Pricing>,
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
      {
        path: "/dashboard/surveyTips",
        element: <SurveyTips />,
      },
      {
        path: "/dashboard/createasurvey",
        element: <CreateASurvey />,
      },
      {
        path: "/dashboard/createsurveyquestions",
        element: <SurveyCreateForm />,
      },
      {
        path: "/dashboard/mysurveys",
        element: <MySurveys />,
      },
      {
        path: "/dashboard/editsurvey/:id",
        // loader: ({ params }) =>
        //   fetch(`https://survey-bee-server.vercel.app/editsurvey/${params?.id}`),
        element: <SurveyCreateForm />,
      },
      {
        path: "/dashboard/preview/:id",
        element: <PreviewSurvey />,
      },
      {
        path:'/dashboard',
        element: <AdminHome></AdminHome>
      },
      {
        path:'/dashboard/manageusers',
        element:<ManageUser> </ManageUser>
      }
    ],
  },

  
  
]);
