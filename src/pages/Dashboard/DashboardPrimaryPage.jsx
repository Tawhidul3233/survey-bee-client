import React, { useState } from "react";
import { useSelector } from "react-redux";
import { user } from "../../features/userSlice";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const DashboardPrimaryPage = () => {
  const [firstName, setFirstName] = useState("");
  const activeUser = useSelector(user);
  const { user: currentUser } = activeUser;
  // console.log(currentUser.email);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // get user from db
  const {
    isLoading,
    error,
    data: dbUser,
    refetch,
  } = useQuery({
    queryKey: ["dbusers"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${currentUser?.email}`
        );
        // console.log(response?.data)
        return response?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(dbUser);

  const handleUpdateProfile = async (data) => {
    setFirstName(data?.firstName);
    try {
      const firstName = data?.firstName;
      const lastName = data?.lastName;
      const jobRole = data?.jobRole;
      const jobLevel = data?.jobLevel;
      // console.log(data);

      const response = await axios.patch(
        `http://localhost:5000/users/${dbUser?._id}`,
        {
          firstName,
          lastName,
          jobRole,
          jobLevel,
        }
      );
      // console.log(response);
      if (response?.data?.data?.acknowledged) {
        // toast.success()
        // console.log(response?.data?.message);
        toast.success(response?.data?.message);
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen">
      <h2 className="md:px-2 lg:px-10 py-3 text-2xl">
        Welcome back,{" "}
        <label
          htmlFor="displayNameModal"
          className="hover:underline cursor-pointer"
        >
          <span className="text-secondary" onClick={() => setFirstName(false)}>
            {dbUser?.firstName || dbUser?.email}!
          </span>
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="displayNameModal" className="modal-toggle" />
        {!firstName && (
          <div className="modal pt-10">
            <div className="modal-box relative w-11/12 max-w-5xl">
              <label
                htmlFor="displayNameModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-3xl font-semibold text-center">
                Tell us about yourself so we can personalize your experience
              </h3>
              <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className="pt-4 pb-6 bg-gray-900 flex px-4 my-8">
                  <div className="w-full">
                    <div className="w-full lg:flex justify-between gap-x-10 my-4">
                      <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                          <span className="label-text text-white text-xl">
                            First Name
                          </span>
                        </label>
                        <input
                          className="border border-info rounded-sm px-3 py-1 text-[1rem]"
                          placeholder="Enter your first name"
                          {...register("firstName", { required: true })}
                          aria-invalid={errors.firstName ? "true" : "false"}
                          type="text"
                        />
                        {errors.firstName?.type === "required" && (
                          <p role="alert" className="text-red-600 text-[.9rem]">
                            First name is required
                          </p>
                        )}
                      </div>
                      <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                          <span className="label-text text-white text-xl">
                            Last Name
                          </span>
                        </label>
                        <input
                          className="border border-info rounded-sm px-3 py-1 text-[1rem]"
                          placeholder="Enter your last name"
                          {...register("lastName", { required: true })}
                          aria-invalid={errors.lastName ? "true" : "false"}
                          type="text"
                        />
                        {errors.lastName?.type === "required" && (
                          <p role="alert" className="text-red-600 text-[.9rem]">
                            Last name is required
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full lg:flex justify-between gap-x-10 my-4">
                      <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                          <span className="label-text text-white text-xl">
                            Job Role
                          </span>
                        </label>
                        <select
                          {...register("jobRole", { required: true })}
                          className="border border-info rounded-sm px-3 py-2 text-[1rem]"
                        >
                          {/* {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            } */}
                          <option value="">Select One</option>
                          <option value="A">Option A</option>
                          <option value="B">Option B</option>
                        </select>
                        {errors.jobRole?.type === "required" && (
                          <p role="alert" className="text-red-600 text-[.9rem]">
                            Job role is required
                          </p>
                        )}
                      </div>
                      <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                          <span className="label-text text-white text-xl">
                            Job Level
                          </span>
                        </label>
                        <select
                          {...register("jobLevel", { required: true })}
                          className="border border-info rounded-sm px-3 py-2 text-[1rem]"
                        >
                          {/* {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            } */}
                          <option value="">Select One</option>
                          <option value="A">Option A</option>
                          <option value="B">Option B</option>
                        </select>
                        {errors.jobLevel?.type === "required" && (
                          <p role="alert" className="text-red-600 text-[.9rem]">
                            Job level is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="displayNameModal"
                    className={`w-full lg:w-1/3`}
                  >
                    <input
                      type="submit"
                      className="btn btn-info w-full normal-case"
                      value="Submit"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
      </h2>
    </div>
  );
};

export default DashboardPrimaryPage;
