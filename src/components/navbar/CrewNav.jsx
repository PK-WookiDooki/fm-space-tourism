import React from "react";
import { NavLink } from "react-router-dom";
import "../nav-link/link.css";

const CrewNav = () => {
  return (
    <nav className=" flex gap-10 justify-end">
      <NavLink
        to={"/crew"}
        end
        className="crew-link text-white text-sm duration-150"
      ></NavLink>
      <NavLink
        to={"/crew/mark"}
        className="crew-link text-white text-sm duration-150"
      ></NavLink>
      <NavLink
        to={"/crew/victor"}
        className="crew-link text-white text-sm duration-150"
      ></NavLink>
      <NavLink
        to={"/crew/anousheh"}
        className="crew-link text-white text-sm duration-150"
      ></NavLink>
    </nav>
  );
};

export default CrewNav;
