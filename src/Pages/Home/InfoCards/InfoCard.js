import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div
      className={`card card-side shadow-xl ${bgClass} text-white mx-3 px-6  lg:my-0 my-7`}
    >
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
