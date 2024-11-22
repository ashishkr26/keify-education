import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="">
      <SideBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
