import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
      const data = await res.json();
      return data;
    },
  });
  const handleAddDoctor = (data) => {
    console.log(data);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is Required" })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email Address required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-error">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty.name}>{specialty.name}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("img", { required: "Photo is Required" })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn btn-accent w-full mt-5"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
