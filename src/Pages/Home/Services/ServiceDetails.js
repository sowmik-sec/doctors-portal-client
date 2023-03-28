import React from "react";
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";
import Service from "./Service";

const ServiceDetails = () => {
  const services = [
    {
      id: 1,
      img: img1,
      title: "Fluoride Treatment",
      description: `It's been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth `,
    },
    {
      id: 2,
      img: img2,
      title: "Cavity Filling",
      description: `One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay.`,
    },
    {
      id: 3,
      img: img3,
      title: "Teeth Whitening",
      description: `Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!`,
    },
  ];
  return (
    <div>
      <div className="text-center mb-16">
        <p className="text-primary font-bold text-[20px]">OUR SERVICES</p>
        <h1 className="text-3xl">Services We Provide</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
