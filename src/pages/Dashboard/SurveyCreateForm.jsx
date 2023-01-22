import React from "react";
import { useForm } from "react-hook-form";

const questionsType = ["Text"];

const SurveyCreateForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const handleCreateSurveyQuestions = data => {
    console.log(data)
  }

  return (
    <div className="min-h-screen">
      <div className="px-20 py-20">
        <h2 className="text-2xl text-primary font-extrabold">Survey Title</h2>
        <div className="border border-black w-full h-auto mt-10">
          <div className="flex w-full items-center h-full px-10 py-8 gap-x-1">
            <h2 className="text-3xl w-20 font-extrabold">Q1</h2>
            <form className="flex" onSubmit={handleSubmit(handleCreateSurveyQuestions)}>
              <input
              {...register("questions", { required: true })}
                type="text"
                placeholder="Enter your question"
                className="w-[60vw] px-4 py-2 border border-gray-500 outline-primary"
              />
              <select
                {...register("questionsType", { required: true })}
                className="w-60 ml-1 px-4 py-2 border border-gray-500 outline-primary inline"
              >
                {questionsType.map((qtype, i) => (
                  <option value={qtype} key={i}>
                    {qtype}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCreateForm;
