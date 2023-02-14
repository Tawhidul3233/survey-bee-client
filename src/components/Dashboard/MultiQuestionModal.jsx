import React from 'react';
import { useForm } from "react-hook-form";

const MultiQuestionModal = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div>
      <input type="checkbox" id="multiQuestionModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="multiQuestionModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">New Survey</h3>
          <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default MultiQuestionModal;