import React from "react";
import { getTechData } from "../../services/getData";
import cImage from "../../assets/technology/image-space-capsule-portrait.jpg";
import { TNav, TechInfo } from "../../components";

const Capsule = () => {
  const capsule = getTechData()[2];
  return (
    <div className="flex flex-col gap-10 w-full  lg:ms-auto lg:flex-row-reverse justify-between">
      <div className=" w-full">
        <img src={cImage} alt="" className="mx-auto lg:ms-auto lg:mx-0" />
      </div>
      <div className=" flex flex-col  lg:flex-row lg:gap-10 gap-5 items-center text-center lg:text-left lg:w-[90%]">
        <TNav />
        <TechInfo name={capsule.name} desc={capsule.description} />
      </div>
    </div>
  );
};

export default Capsule;
