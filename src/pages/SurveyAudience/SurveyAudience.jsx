import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import Subscription from "../../components/Subscription/Subscription";

const SurveyAudience = () => {
  const cards = useLoaderData();
  console.log("surveycards", cards);
  const { survey, blog } = cards[0];
  console.log(blog);

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        {survey.length === 0 ? (
          <>
            {blog.map((blog, index) => {
              return (
                <>
                  {index === 0 ? (
                    <>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <div className="w-full h-full md:w-1/2 md:h-1/2 ">
                          <img
                            src={blog.blog_img}
                            alt="blog"
                            className="rounded-lg w-full h-full md:w-4/5 md:h-1/2 "
                          />
                        </div>
                        <div className=" w-full h-full md:w-1/2 md:h-1/2">
                          <h2 className="text-xl md:text-6xl font-medium mb-4">
                            {blog.blog_title}
                          </h2>
                          <p className="text-lg font-medium mb-2">
                            {blog.blog_desc}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {index === 1 ? (
                        <>
                          <h2 className="text-4xl font-medium mb-4 text-center">
                            {blog.blog_title}
                          </h2>
                          <div className="flex flex-col ">
                            <div className="w-full md:w-1/3 mx-auto">
                              <img
                                src={blog.blog_img}
                                alt=""
                                className="shadow-xl "
                              />
                            </div>
                            <div className=" w-full md:w-1/2 mx-auto">
                              <p>{blog.blog_desc}</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </>
              );
            })}
          </>
        ) : (
          <>
            <div className="w-1/2 bg-slate-200 mx-auto p-8 rounded">
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
                        {question?.options.map((option) => (
                          <label
                            key={option}
                            className="flex items-center mr-4"
                          >
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
                        {question?.options.map((option) => (
                          <label
                            key={option}
                            className="flex items-center mr-4"
                          >
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
                <div className="text-center">
                  <Link
                    to={"/dashboard"}
                    className="uppercase px-4 py-4 rounded bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                  >
                    explore more
                  </Link>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
      <Subscription />
    </>
  );
};

export default SurveyAudience;
