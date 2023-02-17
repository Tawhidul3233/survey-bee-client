import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../../features/userSlice";
import axios from "axios";
import Cookies from "js-cookie";

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

  const [submitted, setSubmitted] = useState(false);
  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    Cookies.set("formSubmitted", "true");
    setSubmitted(true);
  };

  const isFormSubmitted = Cookies.get("formSubmitted");

  const srveyDataHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/surveyData", formData)
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!submitted && !isFormSubmitted) {
    return (
      <>
        <div className="bg-white p-4 rounded-lg">
          <div className="w-1/2 bg-slate-300 mx-auto p-8 rounded">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
              {survey_title}
            </h2>
            <form onSubmit={srveyDataHandler}>
              {questions.map((question) => (
                <div key={question.questions}>
                  <p className="text-lg font-bold mb-2">{question.questions}</p>
                  {question.questionsType === "rating" ? (
                    <div>
                      {question.optionAnswers.map((option, index) => (
                        <div key={option} className="mb-4">
                          <input
                            type="radio"
                            id={option}
                            name={question.questions}
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
                      name={question.questions}
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
  }
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold p-64">Thank you for your response</h1>
      <p>stay with us</p>
    </div>
  );
};

export default PublicSurvey;
