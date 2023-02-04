import React from "react";
import { Link } from "react-router-dom";

const TemplatesCard = ({ surveyTemplateData, filteredData }) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredData.length > 0
        ? filteredData.map((card) => (
            <Link
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundRepeat: "no-repeat",
              }}
              to={`/surveyTemplate/${card._id}`}
              key={card._id}
              className="w-62 h-56 "
            >
              <div className=" text-white rounded">
                <h3 className="text-xl font-bold  mt-20 p-4 ">
                  {card.survey_title}
                </h3>
              </div>
            </Link>
          ))
        : surveyTemplateData.map((card) => (
            <Link
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundRepeat: "no-repeat",
              }}
              to={`/surveyTemplate/${card._id}`}
              key={card._id}
              className="w-62 h-56 "
            >
              <div className=" text-white rounded">
                <h3 className="text-xl font-bold  mt-20 p-4 ">
                  {card.survey_title}
                </h3>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default TemplatesCard;
