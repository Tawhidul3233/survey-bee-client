import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import MenuTest from "../MenuTest";
import IncameChart from "./AdminComponents/IncameChart";
import UserChart from "./AdminComponents/UserChart";
import UserStatstics from "./AdminComponents/UserStatstics";
import AdminMenu from "./AdminMenu/AdminMenu";
import AdminHome from "./ManageUser/AdminHome/AdminHome";
import ManageUser from "./ManageUser/ManageUser";

const AdminPrimaryPage = () => {

  return (
    <div className=" ">
      <AdminHome> </AdminHome>
      <MenuTest></MenuTest>
    </div>
  );
};

export default AdminPrimaryPage;
