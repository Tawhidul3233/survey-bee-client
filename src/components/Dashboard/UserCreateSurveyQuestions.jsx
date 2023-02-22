import React from "react";
import Loading from "../Shared/Loading";

const UserCreateSurveyQuestions = ({ userCreatedQuestion, handleDeleteSurveyQuestion,
  editSurveyLoaderData }) => {
  const surveyInfo = editSurveyLoaderData || userCreatedQuestion[0];
  // console.log(editSurveyLoaderData, "----------", userCreatedQuestion[0]);
  // console.log(surveyInfo?.questionsAndTypes?.questionsType)
  // console.log(surveyInfo?.questionsAndTypes?.optionAnswers)
  return (
    <>
      <div className="flex flex-col items-start gap-y-10">
        {surveyInfo?.questionsAndTypes?.map((q, i) => {
          return (
            <>
              {q?.questions ? (
                <div
                  className="w-full text-start h-auto cursor-pointer flex flex-col gap-y-6 px-1 py-2
                 hover:bg-gray-300 hover:text-black rounded-sm"
                  key={i}
                >
                  <div className="flex justify-between">
                    <span className=" text-xl sm:text-2xl">
                      {i + 1}. {q?.questions}?
                    </span>
                    <>
                      <button
                        className="btn btn-warning btn-xs px-2 text-xs"
                        onClick={() =>
                          handleDeleteSurveyQuestion(
                            surveyInfo?._id,
                            q?.questions,
                            q?.questionsType
                          )
                        }
                      >
                        Delete
                      </button>
                    </>
                  </div>
                  {q?.questionsType === "Comment Box" && (
                    <textarea
                      className=" border outline-none  w-full sm:w-10/12 py-2 px-4 resize-none cursor-pointer rounded-sm"
                      placeholder="Write your opinion:.."
                    ></textarea>
                  ) || undefined || q?.questionsType === "Textbox" && (
                    <input
                      type="text"
                      className="border outline-none  w-full sm:w-10/12 py-2 px-4  cursor-pointer rounded-sm"
                      placeholder="Answer:.."
                    />
                  ) || undefined || q?.questionsType === "Multiple choice" &&

                    <>
                      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1  w-full sm:w-10/12 ">
                        {
                          q?.optionAnswers?.map((option, index) => (
                            <div key={index} className="mb-4 bg-success text-white rounded-sm ">
                              <input
                                type="radio"
                                id={option}
                                name={option.answer}
                                value={option}
                              />
                              <label htmlFor={option} className="ml-2">
                                {option.answer}
                              </label>
                            </div>
                          ))
                        }
                      </div>
                    </>

                    || undefined}
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserCreateSurveyQuestions;
