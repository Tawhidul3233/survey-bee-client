import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Shared/Footer";
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
