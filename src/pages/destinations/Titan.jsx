import React from "react";
import { DesInfo, DNav } from "../../components";
import titanImg from "../../assets/destination/image-titan.png";
import { getDesData } from "../../services/getData";

const Titan = () => {
  const titan = getDesData()[3];
  return (
    <div className=" flex flex-col gap-10 lg:flex-row items-center lg:justify-between lg:w-[90%] lg:ms-auto">
      <div className="lg:w-[35%]">
        <img src={titanImg} alt="Moon" className="w-72 mx-auto lg:w-full" />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start lg:gap-10 lg:w-[55%] ">
        <DNav />
        <DesInfo
          title={titan.name}
          desc={titan.description}
          distance={titan.distance}
          time={titan.travel}
        />
      </div>
    </div>
  );
};

export default Titan;
