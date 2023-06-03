import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white tracking-wide lg:w-[90%] lg:ms-auto flex flex-col md:flex-row gap-10 md:justify-between justify-center items-center">
      <div className=" text-center md:text-left md:w-[50%]">
        <h4 className="text-xl uppercase text-gray-400">
          So, You want to travel to
        </h4>
        <h1 className=" text-[100px] lg:text-[135px] uppercase duration-150">
          Space
        </h1>
        <p className="text-gray-400 leading-6 px-3 md:px-0">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex lg:flex-1 justify-end lg:mt-[100px] my-auto lg:my-0">
        <Link
          to={"/destinations"}
          className="exp-link w-40 h-40 md:w-52 md:h-52 bg-gray-200 bg-opacity-90 rounded-full flex justify-center items-center text-black uppercase text-xl outline outline-transparent outline-[30px] duration-300 outline-offset-8 "
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
