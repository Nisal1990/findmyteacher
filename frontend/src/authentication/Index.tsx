import React from "react";
import { Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <>
      Welcome <br />
      <Outlet />
    </>
  );
};

export default Authentication;
