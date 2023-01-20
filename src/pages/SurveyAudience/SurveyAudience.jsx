import React from "react";
import { useLoaderData } from "react-router";

const SurveyAudience = () => {
  const card = useLoaderData();
  console.log(card);
  return (
    <>
      <div className="my-3 text-center">
        <h1>welcome to joy bangla project</h1>
      </div>
    </>
  );
};

export default SurveyAudience;
