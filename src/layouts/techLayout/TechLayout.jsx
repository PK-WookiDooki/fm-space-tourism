import React from "react";
import "./techL.css";
import { Navbar } from "../../components";
import { Outlet } from "react-router-dom";

const TechLayout = () => {
  return (
    <div className="tech-layout flex flex-col min-h-screen md:pt-10 pb-5">
      <Navbar />
      <main className="flex flex-col flex-1 w-[80%] mx-auto gap-5 mt-5 lg:justify-between">
        <h2 className="text-white uppercase mx-auto text-xl lg:mx-0 lg:w-[90%] lg:self-end">
          <span className="text-gray-600 font-bold"> 03 </span> Space Launch 101
        </h2>
        <div className=" my-auto ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TechLayout;
