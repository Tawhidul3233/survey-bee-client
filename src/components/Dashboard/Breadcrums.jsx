import React from "react";
import { Link } from "react-router-dom";

const Breadcrums = ({ editSurveyLoaderData, surveId }) => {
  return (
    <>
      <div className="text-2xl breadcrumbs">
        <ul>
          <li>
            <Link
              to={`/dashboard/editsurvey/${
                editSurveyLoaderData?._id ? editSurveyLoaderData?._id : surveId
              }`}
              className="text-xl text-secondary font-semibold"
            >
              Design
            </Link>
          </li>
          <li>
            <Link
              to={`/dashboard/preview/${
                editSurveyLoaderData?._id ? editSurveyLoaderData?._id : surveId
              }`}
              className="text-xl text-secondary font-semibold"
            >
              Preview
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrums;
