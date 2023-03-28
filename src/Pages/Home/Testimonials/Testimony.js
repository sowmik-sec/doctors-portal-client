import React from "react";

const Testimony = ({ tes }) => {
  const { img, name, location, testimony } = tes;
  return (
    <div className="max-w-sm shadow-md p-7 mx-auto">
      <div className="mb-8">
        <p>{testimony}</p>
      </div>
      <div className="flex items-center">
        <div className="avatar">
          <div className="h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="ml-3">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
