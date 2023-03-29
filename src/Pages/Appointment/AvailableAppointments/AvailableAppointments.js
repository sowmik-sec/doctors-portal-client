import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState();
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch(`appointmentOptions.json`)
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6">
        {appointmentOptions &&
          appointmentOptions.map((option) => (
            <AppointmentOption
              key={option._id}
              appointmentOption={option}
              setTreatment={setTreatment}
            />
          ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
