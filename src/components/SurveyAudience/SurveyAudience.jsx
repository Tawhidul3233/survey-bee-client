import React from "react";
import AudienceCategory from "./AudienceCategory/AudienceCategory";

const SurveyAudience = () => {
  return (
    <div className="my-4 bg-slate-100 w-3/4 mx-auto p-5">
      <h1 className="font-semibold text-center text-3xl">
        Who is Our survey Audience?
      </h1>
      <AudienceCategory />
    </div>
  );
};

export default SurveyAudience;
