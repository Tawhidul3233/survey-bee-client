import React from "react";
import { useSelector } from "react-redux";
import { user } from "../../features/userSlice";

const DashboardPrimaryPage = () => {
  const activeUser = useSelector(user);

  return (
    <div className="min-h-screen">
      <h2 className="md:px-2 lg:px-10 py-3 text-2xl">
        Welcome back,{" "}
        <span className="text-secondary">{activeUser?.user?.email}!</span>
      </h2>
    </div>
  );
};

export default DashboardPrimaryPage;
