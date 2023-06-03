import React from "react";
import { DesInfo, DNav } from "../../components";
import moonImg from "../../assets/destination/image-moon.png";
import { getDesData } from "../../services/getData";

const Moon = () => {
  const moon = getDesData()[0];
  return (
    <div className=" flex flex-col gap-10 lg:flex-row items-center lg:justify-between lg:w-[90%] lg:ms-auto">
      <div className="lg:w-[35%]">
        <img src={moonImg} alt="Moon" className="w-72 mx-auto lg:w-full" />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start lg:gap-10 lg:w-[55%] ">
        <DNav />
        <DesInfo
          title={moon.name}
          desc={moon.description}
          distance={moon.distance}
          time={moon.travel}
        />
      </div>
    </div>
  );
};

export default Moon;
