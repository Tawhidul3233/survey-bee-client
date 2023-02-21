import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Spinner from "../Spinner/Spinner";
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
            .get("https://survey-bee-server.vercel.app/surveyCategory")
            .then((res) => res.data),
      },

      {
        queryKey: ["template"],
        queryFn: () =>
          axios
            .get("https://survey-bee-server.vercel.app/surveyTemplate")
            .then((res) => res.data),
      },
    ],
  });

  const surveyCategoryData = surveyCategory.data;
  const surveyTemplateData = surveyTemplate.data;

  const [checkList, setCheckList] = useState([]);
  useEffect(() => {
    if (surveyCategoryData) {
      setCheckList(surveyCategoryData.map((item) => ""));
    }
  }, [surveyCategoryData]);
  console.log("checklist", checkList);

  const filteredData = useMemo(() => {
    if (surveyTemplateData) {
      return surveyTemplateData.filter((item, index) => {
        // console.log("expensive computation");
        const condition = item.survey_title === checkList[index];

        return condition;
      });
    } else {
      return [];
    }
  }, [surveyTemplateData, checkList]);

  console.log("filter data", filteredData);

  if (surveyCategory.isLoading || surveyTemplate.isLoading) return <Spinner />;

  if (surveyCategory.error)
    return "error has occurd" + surveyCategory.error.message;

  if (surveyTemplate.error)
    return "error has occurd" + surveyTemplate.error.message;
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
            setCheckList={setCheckList}
          />
        </div>
        <div className="basis-3/4 mx-5 ">
          <div className="flex justify-center items-center ml-14 ">
            <TemplatesCard
              surveyTemplateData={surveyTemplateData}
              filteredData={filteredData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
