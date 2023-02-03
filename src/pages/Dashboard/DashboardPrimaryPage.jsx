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
import RecentSurveys from "../../components/Dashboard/RecentSurveys";
import { useEffect } from "react";
import getUserAllSurveys from "../../api/getUserAllSurveys";
import useAdmin from "../../hooks/useAdmin";
import AdminPrimaryPage from "../../components/Dashboard/AdminContents/AdminPrimaryPage";
import AdminHome from "../../components/Dashboard/AdminContents/ManageUser/AdminHome/AdminHome";
const DashboardPrimaryPage = () => {
  const [firstName, setFirstName] = useState("");
  const [isSurveyDeleted, setIsSurveyDeleted] = useState(false);
  const [allRecentSurveys, setAllRecentSurveys] = useState([]);
  const activeUser = useSelector(user);
  const { user: currentUser } = activeUser;
  // console.log(currentUser.email);
  const [loading, setLoading] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin(currentUser?.email);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // get all recent surveys from server
  useEffect(() => {
    try {
      setLoading(true);
      getUserAllSurveys(currentUser?.email)
        .then((data) => {
          setAllRecentSurveys(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [currentUser?.email, isSurveyDeleted]);

  // get user from server
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
    return <Loading />;
  }

  // if (errors) {
  //   return "Please check your internet!!!";
  // }
  // console.log(dbUser);

  // update user profile
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

  // console.log(allRecentSurveys);

  // handle survey delete
  const handleSurveyDelete = async (surveyTargetDeletedId) => {
    // console.log("survey delete clicekd", surveyTargetDeletedId);
    try {
      const response = await axios.delete(
        `https://survey-bee-server.vercel.app/deleteSurvey/${surveyTargetDeletedId}`
      );
      // console.log(response?.data);
      if (response?.data?.deletedCount > 0) {
        toast.success("Deleted!!!");
        setIsSurveyDeleted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isAdminLoading) {
    <Loading />;
  }
  // console.log("isAdmin", isAdmin);

  return (
    <div className="min-h-screen">
      
      <>{ isAdmin && <AdminPrimaryPage /> }</>

      <>
        {!isAdmin && (
          <>
            {error ? (
              <p className="text-center text-2xl pt-28">
                Please check your internet!!!
              </p>
            ) : (
              <>
                {/* user greet and modal starts */}
                <div className="md:px-2 lg:px-10 py-3 text-2xl">
                  Welcome back,
                  <label
                    htmlFor="displayNameModal"
                    className="hover:underline cursor-pointer"
                  >
                    <span
                      className="text-secondary"
                      onClick={() => setFirstName(false)}
                    >
                      {dbUser?.firstName || dbUser?.email}!
                    </span>
                  </label>
                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="displayNameModal"
                    className="modal-toggle"
                  />
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

                {/* Recent surveys starts here */}
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    {allRecentSurveys?.length ? (
                      <div className="mt-16 mb-4 lg:px-44">
                        <h2 className="text-3xl pb-3">Recent Surveys</h2>
                        {allRecentSurveys?.map((recentSurv) => (
                          <RecentSurveys
                            key={recentSurv._id}
                            recentSurv={recentSurv}
                            loading={loading}
                            handleSurveyDelete={handleSurveyDelete}
                          />
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )}
                {/* <DeletePermissionModal handleSurveyDelete={handleSurveyDelete} /> */}
                {/* Recent surveys ends here */}
                    
                    {/* survey buttons starts */}
                <SurveyCreateButton />
                {/* survey buttons ends */}

      {/* survey buttons ends */}
      <div className="py-16">
          <DashboardProfile
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          handleUpdateProfile={handleUpdateProfile}
          setFirstName={setFirstName}/>
      </div>

              
              </>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default DashboardPrimaryPage;
