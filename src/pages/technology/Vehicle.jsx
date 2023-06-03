import React from "react";
import { getTechData } from "../../services/getData";
import vImage from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import { TNav, TechInfo } from "../../components";

const Vehicle = () => {
  const vehicle = getTechData()[0];
  return (
    <div className="flex flex-col gap-10 w-full  lg:ms-auto lg:flex-row-reverse justify-between">
      <div className=" w-full">
        <img src={vImage} alt="" className="mx-auto lg:ms-auto lg:mx-0" />
      </div>
      <div className=" flex flex-col  lg:flex-row lg:gap-10 gap-5 items-center text-center lg:text-left lg:w-[80%]">
        <TNav />
        <TechInfo name={vehicle.name} desc={vehicle.description} />
      </div>
    </div>
  );
};

export default Vehicle;
