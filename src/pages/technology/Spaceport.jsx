import React from "react";
import { getTechData } from "../../services/getData";
import sImage from "../../assets/technology/image-spaceport-portrait.jpg";
import { TNav, TechInfo } from "../../components";

const Spaceport = () => {
  const Spaceport = getTechData()[1];
  return (
    <div className="flex flex-col gap-10 w-full  lg:ms-auto lg:flex-row-reverse justify-between">
      <div className=" w-full">
        <img src={sImage} alt="" className="mx-auto lg:ms-auto lg:mx-0" />
      </div>
      <div className=" flex flex-col  lg:flex-row lg:gap-10 gap-5 items-center text-center lg:text-left lg:w-[80%]">
        <TNav />
        <TechInfo name={Spaceport.name} desc={Spaceport.description} />
      </div>
    </div>
  );
};

export default Spaceport;
