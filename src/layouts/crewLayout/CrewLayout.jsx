import React from "react";
import "./crewL.css";
import { Navbar } from "../../components";
import { Outlet } from "react-router-dom";

const CrewLayout = () => {
  return (
    <div className="crew-layout flex flex-col min-h-screen md:pt-10 pb-5 lg:pb-0">
      <Navbar />
      <main className="flex flex-col flex-1 w-[80%] mx-auto gap-5 mt-5 lg:justify-between">
        <h2 className="text-white uppercase mx-auto text-xl lg:mx-0 lg:w-[90%] lg:self-end">
          <span className="text-gray-600 font-bold"> 02 </span> Meet Your Crew
        </h2>
        <div className=" my-auto ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CrewLayout;
