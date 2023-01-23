import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Shared/Loading";
import { user } from "../features/userSlice";

const RequireRoutes = ({ children }) => {
  const activeUser = useSelector(user);
  const { user: existingUser, userLoading } = activeUser;
  // console.log(userLoading);
  const location = useLocation();

  if (userLoading) {
    return <Loading />
  }

  if (existingUser?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireRoutes;
