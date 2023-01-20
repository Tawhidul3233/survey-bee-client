import React from "react";

// job role
const jobRoles = [
  "Accounting/Finance",
  "Adminastration",
  "Advertising/Marketing",
  "Art/Creative/Design",
  "Business/Strategy",
  "Consulting",
  "Customar Service",
  "Educator",
  "Engineering",
  "Helthcare Provider",
  "Human Resources",
  "IT",
  "Legal/compliance",
  "Management",
  "Owner",
  "Prodcut Management/Project Management",
  "Public Relations/Communications",
  "Research/Analysis",
  "Sells",
];

// jobLevels
const jobLevels = [
  "Intern",
  "Individual Contributor",
  "Manager",
  "Director",
  "Vice President",
  "President",
  "C-Level",
  "Not Applicable",
];

const UserProfileUpgradeModal = ({
  register,
  errors,
  handleSubmit,
  handleUpdateProfile,
}) => {
  return (
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
                    <option value="">Please select one</option>
                    {jobRoles.map((role, i) => (
                      <option value={role} key={i}>
                        {role}
                      </option>
                    ))}
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
                    <option value="">Please select one</option>
                    {jobLevels.map((level, i) => (
                      <option value={level} key={i}>
                        {level}
                      </option>
                    ))}
                  </select>
                  {errors.jobLevel?.type === "required" && (
                    <p role="alert" className="text-red-600 text-[.9rem]">
                      Job level is required
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full lg:flex justify-between gap-x-10 my-4">
                <div className="form-control w-full text-base-100">
                  <p className="text-[1rem]">
                    We use profile information to help you get the most out of
                    your account, to personalize your experience, and to
                    recommend other SurveyBee features and services you might
                    find interesting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="displayNameModal" className={`w-full lg:w-1/3`}>
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
  );
};

export default UserProfileUpgradeModal;
