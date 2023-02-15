import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../../features/userSlice";
const PublicSurvey = () => {
  const surveyTemplate = useLoaderData();
  const { survey_title, questions } = surveyTemplate;
  const [isCopied, setIsCopied] = useState(false);
  const activeUser = useSelector(user);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const [formData, setFormData] = useState({});

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const srveyDataHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="bg-white p-4 rounded-lg">
        <div className="w-1/2 bg-slate-300 mx-auto p-8 rounded">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
            {survey_title}
          </h2>
          <form onSubmit={srveyDataHandler}>
            {questions.map((question) => (
              <div key={question.question_text}>
                <p className="text-lg font-bold mb-2">
                  {question.question_text}
                </p>
                {question.question_type === "rating" ? (
                  <div>
                    {question.options.map((option, index) => (
                      <div key={option} className="mb-4">
                        <input
                          type="radio"
                          id={option}
                          name={question.question_text}
                          value={option}
                          onChange={handleForm}
                        />
                        <label htmlFor={option} className="ml-2">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <textarea
                    name={question.question_text}
                    rows="4"
                    className="p-2 border border-gray-400 w-full"
                    onChange={handleForm}
                  ></textarea>
                )}
              </div>
            ))}
            {activeUser?.user ? (
              <>
                <div className="text-center mt-4">
                  <button
                    className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
                    onClick={handleCopyLink}
                  >
                    {isCopied ? "Link copied!" : "Copy link"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default PublicSurvey;
