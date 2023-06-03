import React from "react";

const DesInfo = ({ title, desc, distance, time }) => {
  return (
    <div className="text-gray-400">
      <div className="text-center lg:text-left mb-5 lg:mb-0">
        <h2 className="text-5xl mb-3 text-white uppercase"> {title} </h2>
        <p className="text-sm lg:h-36 leading-7"> {desc} </p>
      </div>
      <hr />
      <div className=" flex gap-16 items-center mt-5 justify-around lg:justify-normal">
        <div className="flex flex-col gap-3">
          <h4 className=" uppercase text-sm"> avg. distance </h4>
          <p className="text-2xl text-white"> {distance} </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className=" uppercase text-sm"> est. travel time </h4>
          <p className="text-2xl text-white"> {time} </p>
        </div>
      </div>
    </div>
  );
};

export default DesInfo;
