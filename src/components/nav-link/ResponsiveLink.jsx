import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveLink = ({ path, title }) => {
  return (
    <NavLink
      to={path}
      className={`rNav-link flex justify-start items-center uppercase h-10 px-3 border-l-4 border-transparent text-gray-300 select-none w-full duration-200`}
    >
      <span className="font-bold mr-2 text-white"> {title[0]} </span> {title[1]}
    </NavLink>
  );
};

export default ResponsiveLink;
