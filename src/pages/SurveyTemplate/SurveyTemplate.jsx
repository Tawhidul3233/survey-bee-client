import { Link, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../../features/userSlice";
const Survey = () => {
  const activeUser = useSelector(user);
  const surveyTemplate = useLoaderData();
  const { survey_title, questions } = surveyTemplate;

  const surveyHandler = () => {
    console.log("the survey data", survey_title, questions);
  };
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="w-1/2 bg-slate-300 mx-auto p-8 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
          {survey_title}
        </h2>
        <form className="mt-4">
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
                ></textarea>
              )}
            </div>
          ))}
          <div className="text-center mt-6">
            {activeUser?.user ? (
              <>
                <Link
                  onClick={surveyHandler}
                  className="capitalize px-6 py-2 rounded-lg bg-blue-700 text-white"
                  to={`/PublicSurvey/${surveyTemplate._id}`}
                >
                  share
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
