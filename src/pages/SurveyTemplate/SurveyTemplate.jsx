import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Survey = () => {
  const surveyTemplate = useLoaderData();
  const { survey_title, questions } = surveyTemplate;

  const [formData, setFormData] = useState({});

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const srveyDataHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="w-1/2 bg-slate-300 mx-auto p-8 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
          {survey_title}
        </h2>
        <form className="mt-4" onSubmit={srveyDataHandler}>
          {questions.map((question) => (
            <div key={question.question_text}>
              <p className="text-lg font-bold mb-4">{question.question_text}</p>
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
          <div className="text-center mt-6">
            <Link
              className="capitalize px-6 py-2 rounded-lg bg-blue-700 text-white"
              to={`/PublicSurvey/${surveyTemplate._id}`}
            >
              share
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
