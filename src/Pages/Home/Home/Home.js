import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <InfoCards />
      <Services />
      <MakeAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;
