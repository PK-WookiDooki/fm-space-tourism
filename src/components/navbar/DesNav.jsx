import React from "react";
import { NavLink } from "react-router-dom";
import "../nav-link/link.css";

const DesNav = () => {
  return (
    <nav className=" flex gap-5 uppercase">
      <NavLink
        to={"/destinations"}
        end
        className="d-link text-white text-sm border-b border-transparent duration-150"
      >
        Moon
      </NavLink>
      <NavLink
        to={"/destinations/mars"}
        className="d-link text-white text-sm border-b border-transparent duration-150"
      >
        Mars
      </NavLink>
      <NavLink
        to={"/destinations/europa"}
        className="d-link text-white text-sm border-b border-transparent duration-150"
      >
        Europa
      </NavLink>
      <NavLink
        to={"/destinations/titan"}
        className="d-link text-white text-sm border-b border-transparent duration-150"
      >
        Titan
      </NavLink>
    </nav>
  );
};

export default DesNav;
