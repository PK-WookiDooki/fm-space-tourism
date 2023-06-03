import React from "react";
import { getCrewData } from "../../services/getData";
import dImage from "../../assets/crew/image-douglas-hurley.webp";
import { CNav, CrewInfo } from "../../components";

const Douglas = () => {
  const douglas = getCrewData()[0];
  //   console.log(douglas);
  return (
    <div className=" w-full flex flex-col lg:flex-row-reverse gap-7  lg:justify-between lg:w-[90%] ms-auto">
      <div className="">
        <img
          src={dImage}
          alt=""
          className="mx-auto h-96 lg:h-full lg:w-[420px]"
        />
      </div>
      <div className="flex flex-col lg:flex-col-reverse lg:w-[50%] items-center text-center gap-10 py-5 lg:items-start lg:text-left lg:gap-40 lg:pt-20 lg:pb-14">
        <CNav />
        <CrewInfo name={douglas.name} bio={douglas.bio} role={douglas.role} />
      </div>
    </div>
  );
};

export default Douglas;
