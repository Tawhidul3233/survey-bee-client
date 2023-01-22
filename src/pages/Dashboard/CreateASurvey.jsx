import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreateASurveyModal from "../../components/Dashboard/CreateASurveyModal";

const CreateASurvey = () => {
  const [userSurveyTitle, setUserSurveyTitle] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // create a survey in createASurveyModal
  const handleCreateASurvey = (data) => {
    console.log(data);
    setUserSurveyTitle(data?.surveyTitle);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center my-6">
        <small>Create a survey</small>
        <div className="w-16 mt-2 h-[2px] bg-primary"></div>
        <h2 className="text-2xl font-bold">
          How would you like to get started?
        </h2>
        <div className="flex mt-6 gap-x-8">
          <label
            htmlFor="createSurveyModal"
            onClick={() => setUserSurveyTitle("")}
          >
            <div className="card w-80 h-96 bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer py-10">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/9scLw4z/surv-create-ic-png.png"
                  alt="create survey icon"
                  className="w-2/4 h-autho"
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
          <div className="card w-80 h-96 bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer py-10">
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
                Use a template to see the question types in action. Edit the
                survey and add questions to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateASurvey;
