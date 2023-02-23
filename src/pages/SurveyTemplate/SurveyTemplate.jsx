import { Link, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../../features/userSlice";
import axios from "axios";
import SurveyEditingModal from "./SurveyEditingModal";
import { useState } from "react";

const Survey = () => {
  const activeUser = useSelector(user);
  const surveyTemplate = useLoaderData();
  const { survey_title, questions } = surveyTemplate;
  // console.log("the survey template", surveyTemplate);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const userCreateSurvey = {
    email: activeUser?.user?.email,
    surveyTitle: survey_title,
    questions,
  };
  const surveyHandler = () => {
    axios
      .post(
        "https://survey-bee-server.vercel.app/userCreatedSurveyQuestions",
        userCreateSurvey
      )
      .then((respose) => {
        console.log(respose.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("the survey data", survey_title, questions);
  };
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="w-1/2 bg-slate-200 mx-auto p-8 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
          {survey_title}
        </h2>
        <form className="mt-4">
          {questions.map((question) => (
            <div key={question.questions}>
              <p className="text-lg font-bold mb-4">{question.questions}</p>
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
        </form>
        <div className="text-center mt-6">
          {activeUser?.user ? (
            <>
              <Link
                onClick={surveyHandler}
                className="capitalize px-6 py-2 rounded-lg bg-gradient-to-r from-lime-500 to-cyan-400 hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-600 text-white"
                to={`/PublicSurvey/${surveyTemplate._id}`}
              >
                share
              </Link>
              <label
                htmlFor="surveyEditModal"
                className="capitalize ml-6 rounded-lg py-2 px-6 bg-gradient-to-r from-blue-800 to-indigo-900 text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600"
              >
                Edit
              </label>

              <SurveyEditingModal surveyTemplate={surveyTemplate} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
