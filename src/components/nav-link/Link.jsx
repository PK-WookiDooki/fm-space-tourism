import React from "react";
import { NavLink } from "react-router-dom";
import "./link.css";

const Link = ({ path, title }) => {
  return (
    <NavLink
      to={path}
      className={`nav-link flex justify-center items-center uppercase h-16 text-gray-300 border-b-[3px] border-transparent select-none duration-200`}
    >
      <span className="font-bold mr-2 text-white"> {title[0]} </span> {title[1]}
    </NavLink>
  );
};

export default Link;
