import React from "react";

const BookingModal = ({ treatment }) => {
  const { name } = treatment;
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full btn btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
