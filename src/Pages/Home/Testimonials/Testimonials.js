import React from "react";
import quote from "../../../assets/icons/quote.svg";

const Testimonials = () => {
  return (
    <div className="mt-20 mx-5">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h1 className="text-4xl font-bold">What Our Patients Says</h1>
        </div>
        <div>
          <img src={quote} alt="" className="h-40 w-48" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
