import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Shared/Loading";
import { user } from "../features/userSlice";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const activeUser = useSelector(user);
  const { user: existingUser, userLoading } = activeUser;
  const [isAdmin, isAdminLoading] = useAdmin(existingUser?.email);

  const location = useLocation();

  if (userLoading || isAdminLoading) {
    return <Loading />;
  }

  if (existingUser && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
