import React from "react";

const SurveyEditingModal = ({ surveyTemplate }) => {
  const { survey_title, questions } = surveyTemplate;
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
          <form>
            {questions.map((question) => (
              <div key={question.questions}>
                <input
                  type="text"
                  value={question.questions}
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full my-4"
                />
                {question.questionsType === "rating" ? (
                  <div>
                    {question?.optionAnswers.map((option, index) => (
                      <div key={option} className="mb-4">
                        <input
                          type="radio"
                          id={option}
                          name={question.questions}
                          value={option}
                        />
                        <label htmlFor={option} className="ml-2">
                          {option}
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
              <button className="capitalize px-6 py-2 rounded-lg bg-gradient-to-r from-lime-500 to-cyan-400 hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-600 text-white">
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
