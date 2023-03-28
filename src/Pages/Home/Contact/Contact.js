import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import photo from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div>
      <div
        className="mt-36 py-16"
        style={{
          background: `url(${photo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center">
          <h4 className="text-xl text-primary font-bold">Contact Us</h4>
          <h2 className="text-4xl mb-10 text-white">Stay Connected with us</h2>
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered w-full max-w-xs mb-5"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-xs mb-5"
          />
          <br />
          <textarea
            className="textarea textarea-bordered textarea-md w-full max-w-xs mb-5"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Your message"
          ></textarea>
          <br />
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
