import React, { useState } from "react";
import { useSelector } from "react-redux";
import { user } from "../../features/userSlice";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import UserProfileUpgradeModal from "../../components/Dashboard/UserProfileUpgradeModal";
import SurveyCreateButton from "../../components/Dashboard/SurveyCreateButton";
import Loading from "../../components/Shared/Loading";
import DashboardProfile from "./DashboardProfile";

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
          `https://survey-bee-server.vercel.app/users/${currentUser?.email}`
        );
        // console.log(response?.data)
        return response?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return "Please check your internet!!!";
  }
  // console.log(dbUser);

  const handleUpdateProfile = async (data) => {
    setFirstName(data?.firstName);
    try {
      const firstName = data?.firstName;
      const lastName = data?.lastName;
      const jobRole = data?.jobRole;
      const jobLevel = data?.jobLevel;
      // console.log(data);

      const response = await axios.patch(
        `https://survey-bee-server.vercel.app/users/${dbUser?._id}`,
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
      {/* user greet and modal starts */}
      <div className="md:px-2 lg:px-10 py-3 text-2xl">
        Welcome back,
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
          <UserProfileUpgradeModal
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            handleUpdateProfile={handleUpdateProfile}
          />
        )}
      </div>
      {/* user greet and modal ends */}

      {/* survey buttons starts */}
      <SurveyCreateButton />

      {/* survey buttons ends */}
      <div className="py-16">
          <DashboardProfile
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          handleUpdateProfile={handleUpdateProfile}
          setFirstName={setFirstName}/>
      </div>
    </div>
  );
};

export default DashboardPrimaryPage;
