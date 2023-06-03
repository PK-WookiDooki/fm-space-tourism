import React from "react";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
import "./main-layout.css";

const Layout = () => {
  return (
    <div className="main-layout flex flex-col min-h-screen md:pt-10">
      <Navbar />
      <main className="flex flex-1 w-[80%] mx-auto mt-5 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
