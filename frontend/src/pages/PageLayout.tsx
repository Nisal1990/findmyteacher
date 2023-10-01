import React from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";

const PageLayout = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
