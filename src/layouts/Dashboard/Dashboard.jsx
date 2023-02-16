import React from "react";
import { Outlet } from "react-router-dom";
import AdminMenu from "../../components/Dashboard/AdminContents/AdminMenu/AdminMenu";
import AdminPrimaryPage from "../../components/Dashboard/AdminContents/AdminPrimaryPage";
import ManageUser from "../../components/Dashboard/AdminContents/ManageUser/ManageUser";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Shared/Footer";
import { setActiveUser } from "../../features/userSlice";
import useAdmin from "../../hooks/useAdmin";
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";

const Dashboard = () => {
  // const { user: existingUser, userLoading } = setActiveUser;
  // const [isAdmin, isAdminLoading] = useAdmin(existingUser?.email);
  return (
    <>
      <>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </>
  );
};

export default Dashboard;
