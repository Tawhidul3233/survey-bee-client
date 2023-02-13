import { useLoaderData } from "react-router";

const SurveyAudience = () => {
  const cards = useLoaderData();
  const { survey } = cards[0];
  console.log(survey.length);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {survey.length === 0 ? (
        <>
          <h1>hello</h1>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-medium mb-4">
            {survey[0].survey_title}
          </h2>
          <form>
            {survey[0]?.questions?.map((question) => (
              <div key={question.question_id} className="mb-6">
                <p className="text-lg font-medium mb-2">
                  {question.question_text}
                </p>
                {question.answer_type === "rating" && (
                  <div className="flex items-center">
                    {question.options.map((option) => (
                      <label key={option} className="flex items-center mr-4">
                        <input
                          type="radio"
                          className="form-radio "
                          name={`question-${question.question_id}`}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
                {question.answer_type === "yesno" && (
                  <div className="flex items-center">
                    {question.options.map((option) => (
                      <label key={option} className="flex items-center mr-4">
                        <input
                          type="radio"
                          className="form-radio"
                          name={`question-${question.question_id}`}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
                {question.answer_type === "text" && (
                  <textarea
                    className="form-input w-full mt-2 border-2"
                    name={`question-${question.question_id}`}
                  />
                )}
              </div>
            ))}
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default SurveyAudience;
