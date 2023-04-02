import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/doctors`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (err) {}
    },
  });
  if (isLoading) {
    return <Loading />;
  }
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
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
