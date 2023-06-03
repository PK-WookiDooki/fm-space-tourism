import React from "react";

const CrewInfo = ({ name, desc }) => {
  return (
    <div className="text-gray-400 flex flex-col gap-5">
      <div className="">
        <h3 className=" uppercase mb-2"> The Terminology . . . </h3>
        <h2 className=" uppercase text-5xl text-white"> {name} </h2>
      </div>
      <p className=" leading-7 px-3 md:px-0"> {desc} </p>
    </div>
  );
};

export default CrewInfo;
