import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";
// import Navbar from "../Navbar";
import SocialMedia from "../SocialMedia";

const MainLayout = () => {
  return (
    <div className=" text-white">
      <Nav />
      <div className="text-white  bg-gradient-to-b from-primary to-secondary min-h-screen font-montserrat">
        <SocialMedia />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
