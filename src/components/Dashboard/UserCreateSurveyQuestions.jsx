import React from "react";

const UserCreateSurveyQuestions = ({ userCreatedQuestion }) => {
  //   console.log(userCreatedQuestion);
  return (
    <div className="flex flex-col items-start gap-y-10">
      {userCreatedQuestion[0]?.questionsAndTypes?.map((q, i) => {
        return (
          <>
            {q?.questions ? (
              <button
                className="w-full text-start h-auto cursor-pointer flex flex-col gap-y-6 px-1 py-2 hover:bg-gray-400 rounded-sm"
                key={q._id}
              >
                <span className="text-2xl">{i+1}. { q?.questions}</span>
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
              </button>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default UserCreateSurveyQuestions;
