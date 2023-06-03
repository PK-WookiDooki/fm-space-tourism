import React from "react";

const CrewInfo = ({ name, bio, role }) => {
  return (
    <div className="text-gray-400 lg:w-[80%] flex flex-col gap-5">
      <h3 className=" uppercase text-2xl"> {role} </h3>
      <h2 className=" uppercase text-3xl text-white"> {name} </h2>
      <p className=" leading-7"> {bio} </p>
    </div>
  );
};

export default CrewInfo;
