import React from "react";
import { DesInfo, DNav } from "../../components";
import marsImg from "../../assets/destination/image-mars.png";
import { getDesData } from "../../services/getData";

const Mars = () => {
  const mars = getDesData()[1];
  return (
    <div className=" flex flex-col gap-10 lg:flex-row items-center lg:justify-between lg:w-[90%] lg:ms-auto ">
      <div className="lg:w-[35%]">
        <img src={marsImg} alt="Moon" className="w-72 mx-auto lg:w-full" />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start lg:gap-10 lg:w-[55%] ">
        <DNav />
        <DesInfo
          title={mars.name}
          desc={mars.description}
          distance={mars.distance}
          time={mars.travel}
        />
      </div>
    </div>
  );
};

export default Mars;
