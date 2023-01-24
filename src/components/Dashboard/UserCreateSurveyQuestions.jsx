import React from "react";

const UserCreateSurveyQuestions = ({
  userCreatedQuestion,
  handleDeleteSurveyQuestion,
}) => {
  const surveyInfo = userCreatedQuestion[0];
  // console.log(surveyInfo);

  // console.log(isQHover)
  return (
    <div className="flex flex-col items-start gap-y-10">
      {surveyInfo?.questionsAndTypes?.map((q, i) => {
        return (
          <>
            {q?.questions ? (
              <div
                className="w-full text-start h-auto cursor-pointer flex flex-col gap-y-6 px-1 py-2
                 hover:bg-gray-400 hover:text-base-100 rounded-sm"
                key={i}
              >
                <div className="flex justify-between">
                  <span className="text-2xl">
                    {i + 1}. {q?.questions}
                  </span>
                  <>
                    <button
                      className="btn btn-nutral btn-sm px-6"
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
                {q?.questionsType === "Comment Box" ? (
                  <textarea
                    readOnly
                    className="border border-black outline-none w-4/12 py-2 px-4 resize-none cursor-pointer"
                  ></textarea>
                ) : undefined || q?.questionsType === "Textbox" ? (
                  <input
                    type="text"
                    readOnly
                    className="border border-black outline-none w-3/12 py-2 px-4 cursor-pointer"
                  />
                ) : undefined}
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default UserCreateSurveyQuestions;
