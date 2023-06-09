import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://doctors-portal-server-sandy-delta.vercel.app/doctors`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (err) {}
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  const handleDeleteDoctor = (doctor) => {
    const id = doctor._id;
    fetch(
      `https://doctors-portal-server-sandy-delta.vercel.app/doctors/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`Doctor ${doctor.name} deleted successfully`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Manage Doctors: {doctors?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>AVATAR</th>
              <th>Name</th>
              <th>SPECIALTY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={doctor.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete ${deletingDoctor.name}?`}
          message={`If you delete ${deletingDoctor.name}, it can't be undone`}
          successAction={handleDeleteDoctor}
          successButtonName="Delete"
          modalData={deletingDoctor}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
