import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import IncameChart from "./AdminComponents/IncameChart";
import UserChart from "./AdminComponents/UserChart";
import UserStatstics from "./AdminComponents/UserStatstics";
import AdminMenu from "./AdminMenu/AdminMenu";
import ManageUser from "./ManageUser/ManageUser";

const AdminPrimaryPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex  ">
        <div className=" w-2/5 sm:w-1/4   ">
          <AdminMenu> </AdminMenu>
        </div>
        <div className=" w-3/5 sm:w-3/4 right-0  ">
          <Outlet> </Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdminPrimaryPage;
