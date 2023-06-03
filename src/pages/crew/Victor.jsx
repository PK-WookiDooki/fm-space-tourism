import React from "react";
import { getCrewData } from "../../services/getData";
import dImage from "../../assets/crew/image-victor-glover.webp";
import { CNav, CrewInfo } from "../../components";

const Victor = () => {
  const victor = getCrewData()[2];
  //   console.log(victor);
  return (
    <div className=" w-full flex flex-col lg:flex-row-reverse gap-7  lg:justify-between lg:w-[90%] ms-auto">
      <div className="">
        <img
          src={dImage}
          alt=""
          className="mx-auto h-96 lg:h-auto lg:w-[500px]"
        />
      </div>
      <div className="flex flex-col lg:flex-col-reverse lg:w-[50%] items-center justify-center text-center gap-10 py-5 lg:items-start lg:text-left lg:gap-40">
        <CNav />
        <CrewInfo name={victor.name} bio={victor.bio} role={victor.role} />
      </div>
    </div>
  );
};

export default Victor;
