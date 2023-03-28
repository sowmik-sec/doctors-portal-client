import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import Testimony from "./Testimony";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      testimony: `It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content`,
      img: people1,
      name: "Winson Herry",
      location: "California",
    },
    {
      id: 2,
      testimony: `It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content`,
      img: people1,
      name: "Winson Herry",
      location: "California",
    },
    {
      id: 3,
      testimony: `It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content`,
      img: people1,
      name: "Winson Herry",
      location: "California",
    },
  ];
  return (
    <div className="mt-20 mx-5">
      <div className="flex justify-between items-center mb-20">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h1 className="text-4xl font-bold">What Our Patients Says</h1>
        </div>
        <div>
          <img src={quote} alt="" className="h-40 w-48" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {testimonials.map((testimony) => (
          <Testimony key={testimony.id} tes={testimony} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
