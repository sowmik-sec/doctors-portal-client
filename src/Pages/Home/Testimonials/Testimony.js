import React from "react";

const Testimony = ({ tes }) => {
  const { img, name, location, testimony } = tes;
  return (
    <div className="max-w-sm shadow-md p-7 mx-auto">
      <div className="mb-8">
        <p>{testimony}</p>
      </div>
      <div className="flex">
        <img src={img} alt="" className="rounded-full h-16" />
        <div>
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
