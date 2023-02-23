import React, { useState } from "react";

const SurveyEditingModal = ({ surveyTemplate, open, close }) => {
  const { survey_title, questions } = surveyTemplate;
  console.log(questions);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.values());
    for (const value of formData.values()) {
      console.log(value);
    }
  };
  return (
    <>
      <input type="checkbox" id="surveyEditModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="surveyEditModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{survey_title}</h3>
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div key={question.questions}>
                <input
                  type="text"
                  defaultValue={question.questions}
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full my-4"
                />
                {question.questionsType === "rating" ? (
                  <div>
                    {question?.optionAnswers.map((option, index) => (
                      <div key={option} className="mb-4">
                        <input type="radio" id={option} defaultValue={option} />
                        <label htmlFor={option} className="ml-2">
                          <input
                            defaultValue={option}
                            name={option}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-accent w-full max-w-xs"
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <textarea
                    name={question.questions}
                    rows="4"
                    className="p-2 border border-gray-400 w-full"
                  ></textarea>
                )}
              </div>
            ))}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="capitalize px-6 py-2 rounded-lg bg-gradient-to-r from-lime-500 to-cyan-400 hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-600 text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SurveyEditingModal;
