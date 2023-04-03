import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(
        `https://doctors-portal-server-sandy-delta.vercel.app/appointmentOptions?date=${date}`
      ).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
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
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
