import React from "react";

const serveyCategories = [
  "Community or volunteer feedback",
  "Customar feedback",
  "Concept, product, or ad testing",
  "Brand tracking or awarness",
  "Genaral market research",
  "Employee engagement",
  "Employee performance",
  "Genaral employee feedback",
  "Event registration",
  "Event feedback",
  "Academic research",
  "Course evalution",
  "Student or parent feedback",
  "Quiz",
  "Other",
  "Form or application",
  "Vote or poll",
];

const CreateASurveyModal = ({
  register,
  errors,
  handleSubmit,
  handleCreateASurvey,
}) => {
  return (
    <>
      {/* createSurveyModal starts */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="createSurveyModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="createSurveyModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">New Survey</h3>
          <form onSubmit={handleSubmit(handleCreateASurvey)}>
            <div className="pt-0 pb-4 bg-gray-900 flex px-4 mt-2">
              <div className="w-full">
                <div className="w-full flex flex-col gap-y-2 my-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-white text-xl">
                        Survey Title
                      </span>
                    </label>
                    <input
                      className="border border-info rounded-sm px-3 py-1 text-[1rem]"
                      placeholder="Enter your survey title"
                      {...register("surveyTitle", { required: true })}
                      aria-invalid={errors.surveyTitle ? "true" : "false"}
                      type="text"
                    />
                    {errors.surveyTitle?.type === "required" && (
                      <p role="alert" className="text-red-600 text-[.9rem]">
                        Survey title is required
                      </p>
                    )}
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-white text-xl">
                        Survey category
                      </span>
                    </label>
                    <select
                      {...register("surveyCategory", { required: true })}
                      className="border border-info rounded-sm px-3 py-2 text-[1rem]"
                    >
                      <option value="">Survey Category</option>
                      {serveyCategories.map((role, i) => (
                        <option value={role} key={i}>
                          {role}
                        </option>
                      ))}
                    </select>
                    {errors.surveyCategory?.type === "required" && (
                      <p role="alert" className="text-red-600 text-[.9rem]">
                        survey categorys is required
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="createSurveyModal" className={`w-full lg:w-1/3`}>
                <input
                  type="submit"
                  className="btn btn-secondary w-full normal-case text-white"
                  value="Create Survey"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
      {/* createSurveyModal ends */}
    </>
  );
};

export default CreateASurveyModal;
