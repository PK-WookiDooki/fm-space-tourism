import React, { useEffect, useState } from "react";
import logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { NLink, RLink } from "..";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      return setIsScroll(true);
    }
    return setIsScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={` ${
        isScroll ? "bg-black bg-opacity-60" : ""
      } sticky top-0 backdrop-blur-md py-5 md:py-0`}
    >
      <nav className=" flex justify-between w-[80%] mx-auto gap-20 items-center z-10 relative">
        <div className="">
          <Link to={"/"} className="">
            <img src={logo} alt="" className="w-10" />
          </Link>
        </div>
        <div className="line lg:flex flex-1 border w-full h-[1px] border-white border-opacity-20 hidden"></div>
        <div className="nav-links md:flex gap-10 items-center hidden">
          <NLink path={"/"} title={["00", "Home"]} />
          <NLink path={"/destinations"} title={["01", "destinations"]} />
          <NLink path={"/crew"} title={["02", "crew"]} />
          <NLink path={"/technology"} title={["03", "technology"]} />
        </div>

        <button onClick={handleMenu} className=" md:hidden duration-300">
          {menu ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              {" "}
              <g fill="#D0D6F9" fillRule="evenodd">
                {" "}
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          )}
        </button>
        {/* <nav
          className={` absolute top-1 left-0 flex flex-col gap-3 ${
            menu ? " md:hidden h-52 bg-black bg-opacity-50 py-3" : "h-0"
          } duration-150 z-[5] overflow-hidden`}
        >
          <RLink path={"/"} title={["00", "Home"]} />
          <RLink path={"/destinations"} title={["01", "destinations"]} />
          <RLink path={"/crew"} title={["02", "crew"]} />
          <RLink path={"/technology"} title={["03", "technology"]} />
        </nav> */}
      </nav>

      <nav
        className={` fixed top-0 w-full pt-20 ${
          menu
            ? " md:hidden h-72 backdrop-blur-xl bg-black bg-opacity-60 py-3"
            : "h-0"
        } duration-200 z-[5] overflow-hidden`}
      >
        <div className="flex flex-col gap-3 w-[85%] mx-auto">
          <RLink path={"/"} title={["00", "Home"]} />
          <RLink path={"/destinations"} title={["01", "destinations"]} />
          <RLink path={"/crew"} title={["02", "crew"]} />
          <RLink path={"/technology"} title={["03", "technology"]} />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
