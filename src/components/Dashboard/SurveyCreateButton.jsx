import React from "react";
import { Link } from "react-router-dom";

const SurveyCreateButton = ({ className }) => {
  return (
    <div className={`mb-10 mt-20 mx-auto ${className?.mt}`}>
      <div className={`flex flex-col items-center ${className?.flexStart}`}>
        <h2 className={`text-2xl py-10 ${className?.hidden}`}>
          Let's get started & create your first survey!
        </h2>
        <Link
          to="/dashboard/createasurvey"
          className="btn btn-primary text-white px-10"
        >
          <span className="mr-1">{className?.icon}</span>
          Create Survey
        </Link>
      </div>
    </div>
  );
};

export default SurveyCreateButton;
