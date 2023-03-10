import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CreateASurveyModal from "../../components/Dashboard/CreateASurveyModal";
import { user } from "../../features/userSlice";

const CreateASurvey = () => {
  const [userSurveyTitle, setUserSurveyTitle] = useState("");
  const navigate = useNavigate();
  const activeUser = useSelector(user);
  // console.log(activeUser);
  const email = activeUser?.user?.email;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // create a survey in createASurveyModal
  const handleCreateASurvey = async (data) => {
    // console.log(data);
    setUserSurveyTitle(data?.surveyTitle);

    // survey Create and modified time
    const surveyCreateTime = new Date().toLocaleDateString();
    const surveyModifiedTime = new Date().toLocaleDateString();
    const surveyCreateTimeMl = new Date().getTime();

    // console.log(data);
    const surveyTitle = data?.surveyTitle;
    const surveyCategory = data?.surveyCategory;
    const surveyDescription = data?.surveyDescription;
    try {
      const response = await axios.post(
        "https://survey-bee-server.vercel.app/userCreatedSurveyQuestions",
        {
          email,
          surveyTitle,
          surveyCategory,
          surveyDescription,
          surveyCreateTime,
          surveyModifiedTime,
          surveyCreateTimeMl,
        }
      );
      // console.log(response.data);
      if (response?.data?.insertedId) {
        return navigate("/dashboard/createsurveyquestions");
      }
    } catch (error) {
      // console.log(error);
      toast.warn(error?.message);
    }
    // if (data?.surveyTitle) {
    //   return navigate("/dashboard/createsurveyquestions");
    // }
  };

  return (
    <div className="py-12 bg-[#f5f6fa]">
      <div className="flex flex-col items-center my-6">
        <small>Create a survey</small>
        <div className="w-16 mt-2 h-[2px] bg-primary"></div>
        <h2 className="text-2xl font-bold mb-8 text-center">
          How would you like to get started?
        </h2>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 mx-auto gap-20 pt-6">
          <label
            htmlFor="createSurveyModal"
            onClick={() => setUserSurveyTitle("")}
          >
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto cursor-pointer py-10">
              <figure className="px-10 pt-10 mb-5">
                <img
                  src="https://i.ibb.co/9scLw4z/surv-create-ic-png.png"
                  alt="create survey icon"
                  className="w-2/4 h-auth"
                />
              </figure>
              <div className="card-body items-center text-center pt-6">
                <h2 className="card-title text-secondary font-bold">
                  Start your survey from scratch
                </h2>
                <p className="pt-3">Build your survey from scratch.</p>
              </div>
            </div>
          </label>
          {!userSurveyTitle && (
            <CreateASurveyModal
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              handleCreateASurvey={handleCreateASurvey}
            />
          )}
          <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer py-10">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/4pvC81S/template-surv.png"
                alt="create survey icon"
                className="w-2/4 auto"
              />
            </figure>
            <div className="items-center text-center pt-6 px-8">
              <h2 className="card-title text-secondary font-bold">
                Start your survey from our quick start template
              </h2>
              <p className="pt-3 text-[.9rem]">
                Use a template to see the question types action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateASurvey;
