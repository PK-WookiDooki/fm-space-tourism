import React from "react";
import { NavLink } from "react-router-dom";
import "../nav-link/link.css";

const DesNav = () => {
  return (
    <nav className=" flex gap-10 uppercase lg:justify-between lg:flex-col ">
      <NavLink
        to={"/technology"}
        end
        className="tech-link text-white duration-150"
      >
        1
      </NavLink>
      <NavLink
        to={"/technology/spaceport"}
        className="tech-link text-white duration-150"
      >
        2
      </NavLink>
      <NavLink
        to={"/technology/capsule"}
        className="tech-link text-white duration-150"
      >
        3
      </NavLink>
    </nav>
  );
};

export default DesNav;
