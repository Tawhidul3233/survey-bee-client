import React from "react";
import { Link } from "react-router-dom";

const SurveyCreateButton = () => {
  return (
    <div className="my-10 mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl py-10">
          Let's get started & create your first survey!
        </h2>
        <Link to="/dashboard/createasurvey" className="btn btn-primary text-white px-10">
          Create Survey
        </Link>
      </div>
    </div>
  );
};

export default SurveyCreateButton;
