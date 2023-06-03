import React from "react";
import { getCrewData } from "../../services/getData";
import dImage from "../../assets/crew/image-mark-shuttleworth.webp";
import { CNav, CrewInfo } from "../../components";

const Mark = () => {
  const mark = getCrewData()[1];
  //   console.log(mark);
  return (
    <div className=" w-full flex flex-col lg:flex-row-reverse gap-7  lg:justify-between lg:w-[90%] ms-auto">
      <div className="">
        <img
          src={dImage}
          alt=""
          className="mx-auto h-96 lg:h-auto lg:w-[390px]"
        />
      </div>
      <div className="flex flex-col lg:flex-col-reverse lg:w-[50%] items-center text-center gap-10 py-5 lg:items-start lg:text-left lg:gap-40 lg:pt-20 lg:pb-[58px]">
        <CNav />
        <CrewInfo name={mark.name} bio={mark.bio} role={mark.role} />
      </div>
    </div>
  );
};

export default Mark;
