import React from "react";
import { useLoaderData } from "react-router";

const SurveyAudience = () => {
  const cards = useLoaderData();
  console.log(cards[0]);
  return (
    <>
      <div className="my-3 text-center">
        <h1 className="text-xl">{cards[0].title}</h1>
      </div>
    </>
  );
};

export default SurveyAudience;
