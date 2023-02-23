import { createBrowserRouter } from "react-router-dom";
import AdminPrimaryPage from "../components/Dashboard/AdminContents/AdminPrimaryPage";
import AdminHome from "../components/Dashboard/AdminContents/ManageUser/AdminHome/AdminHome";
import ManageUser from "../components/Dashboard/AdminContents/ManageUser/ManageUser";
import OrderHistory from "../components/Dashboard/AdminContents/OrderHistory/OrderHistory";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import Survey from "../layouts/Survey/Survey";
import ApplyPage from "../pages/ApplyPage/ApplyPage";
import CustomerService from "../pages/CustomerService/CustomerService";
import Cx from "../pages/CxPage/Cx";
import BuySurvey from "../pages/Dashboard/BuySurvey";
import CreateASurvey from "../pages/Dashboard/CreateASurvey";
import DashboardPrimaryPage from "../pages/Dashboard/DashboardPrimaryPage";
import MySurveys from "../pages/Dashboard/MySurveys";
import PreviewSurvey from "../pages/Dashboard/PreviewSurvey";
import SurveyCreateForm from "../pages/Dashboard/SurveyCreateForm";
import SurveyShare from "../pages/Dashboard/SurveyShare";
import Home from "../pages/Home/Home";
import BuyNow from "../pages/Pricing/BuyNow";
import PayNow from "../pages/Pricing/PayNow";
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
          fetch(
            `https://survey-bee-server.vercel.app/surveyTemplate/${params.id}`
          ),
        element: <SurveyTemplate />,
      },
      {
        path: "/plans-pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/buyNow",
        element: <BuyNow />,
      },
      {
        path: "/paynow",
        element: <PayNow></PayNow>,
      },
      {
        path: "/buysurvey/:id",
        loader: ({ params }) =>
          fetch(`https://survey-bee-server.vercel.app/buysurvey/${params.id}`)
        ,
        element: <BuySurvey> </BuySurvey>,
      }
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
        loader: ({ params }) =>
          fetch(`https://survey-bee-server.vercel.app/editsurvey/${params?.id}`),
        element: <SurveyCreateForm />,
      },
      {
        path: "/dashboard/preview/:id",
        element: <PreviewSurvey />,
      },

      {
        path: "/dashboard/overview",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/manageusers",
        element: <ManageUser> </ManageUser>,
      },
      {
        path: "/dashboard/orderhistory",
        element: <OrderHistory> </OrderHistory>,
      },
    ],
  },
  {
    path: "/PublicSurvey/:id",
    loader: ({ params }) =>
      fetch(`https://survey-bee-server.vercel.app/PublicSurvey/${params.id}`),
    element: <Survey />,
  },
  {
    path: "/surveyshare/:id",
    element: <SurveyShare />,
  },
]);
