import React from "react";
import { DesInfo, DNav } from "../../components";
import europaImg from "../../assets/destination/image-europa.png";
import { getDesData } from "../../services/getData";

const Europa = () => {
  const europa = getDesData()[2];
  return (
    <div className=" flex flex-col gap-10 lg:flex-row items-center lg:justify-between lg:w-[90%] lg:ms-auto">
      <div className="lg:w-[35%]">
        <img src={europaImg} alt="Moon" className="w-72 mx-auto lg:w-full" />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start lg:gap-10 lg:w-[55%] ">
        <DNav />
        <DesInfo
          title={europa.name}
          desc={europa.description}
          distance={europa.distance}
          time={europa.travel}
        />
      </div>
    </div>
  );
};

export default Europa;
