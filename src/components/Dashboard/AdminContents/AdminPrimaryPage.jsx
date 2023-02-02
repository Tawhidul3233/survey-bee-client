import React from "react";
import UserStatstics from "./AdminComponents/UserStatstics";
import AdminMenu from "./AdminMenu/AdminMenu";
import ManageUser from "./ManageUser/ManageUser";

const AdminPrimaryPage = () => {
  return (
    <div className=" flex ">
      <div className=" w-2/5 sm:w-1/4 fixed  ">
        <AdminMenu> </AdminMenu>
      </div>
      <div className=" w-3/5 sm:w-3/4 right-0 absolute ">
        <UserStatstics></UserStatstics>
        <ManageUser></ManageUser>
      </div>
    </div>
  );
};

export default AdminPrimaryPage;
