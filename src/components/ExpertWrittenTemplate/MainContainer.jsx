import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Sidebar from "./Leftbar";
import TemplatesCard from "./TemplatesCard";
const MainContainer = () => {
  const hadleSearch = (e) => {
    e.preventDefault();
  };

  const [surveyCategory, surveyTemplate] = useQueries({
    queries: [
      {
        queryKey: ["category"],
        queryFn: () =>
          axios
            .get("http://localhost:5000/surveyCategory")
            .then((res) => res.data),
      },

      {
        queryKey: ["template"],
        queryFn: () =>
          axios
            .get("http://localhost:5000/surveyTemplate")
            .then((res) => res.data),
      },
    ],
  });

  if (surveyCategory.isLoading) return "category data is loading";
  if (surveyTemplate.isLoading) return "template data is loading";
  if (surveyCategory.error)
    return "error has occurd" + surveyCategory.error.message;

  if (surveyTemplate.error)
    return "error has occurd" + surveyTemplate.error.message;

  const surveyCategoryData = surveyCategory.data;
  const surveyTemplateData = surveyTemplate.data;

  return (
    <div className="">
      <h1 className="text-2xl text-center capitalize font-semibold">
        Start with an expert-written template
      </h1>
      <p className="text-center my-4 w-1/2 mx-auto">
        Our sample survey templates make it easy for you to start collecting
        feedback in just minutes. Explore hundreds of questions across different
        survey types, all designed to get you accurate results you can rely on.
      </p>

      <div className="  md:flex md:flex-row">
        <div className="basis-1/4 mx-5">
          <Sidebar
            hadleSearch={hadleSearch}
            surveyCategoryData={surveyCategoryData}
          />
        </div>
        <div className="basis-3/4 mx-5 ">
          <div className="grid justify-center">
            <TemplatesCard surveyTemplateData={surveyTemplateData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
