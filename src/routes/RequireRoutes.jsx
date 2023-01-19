import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { user } from "../features/userSlice";

const RequireRoutes = ({ children }) => {
  const activeUser = useSelector(user);
  const { user: existingUser, userLoading } = activeUser;
  console.log(userLoading);
  const location = useLocation();

  if (userLoading) {
    return <h2>Loading...</h2>;
  }

  if (existingUser?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireRoutes;
