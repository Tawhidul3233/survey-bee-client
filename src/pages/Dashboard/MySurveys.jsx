import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsCollection, BsThreeDots } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiShare2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { user } from "../../features/userSlice";
import { useEffect } from "react";
import getUserAllSurveys from "../../api/getUserAllSurveys";
import { useState } from "react";
import Loading from "../../components/Shared/Loading";

const mySurveyText = [
  "TITLE",
  "MODIFIED",
  "RESPONSES",
  "DESIGN",
  "COLLECT",
  "ANALYZE",
  "SHARE",
  "MORE",
];

const MySurveys = () => {
  const activeUser = useSelector(user);
  const [surveys, setSurveys] = useState([]);
  const [surveysLoading, setSurveysLoading] = useState(false);

  // get all surveys
  useEffect(() => {
    setSurveysLoading(true);
    getUserAllSurveys(activeUser?.user?.email)
      .then((data) => {
        setSurveys(data);
        setSurveysLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setSurveysLoading(false);
      });
  }, [activeUser?.user?.email]);

//   console.log(surveys);

  return (
    <>
      {surveysLoading ? (
        <Loading />
      ) : (
        <>
          <section className="min-h-screen mx-auto w-full bg-[#F4F5F5] pt-10">
            <div className="w-[70vw] mx-auto">
              {surveys?.map((survey) => {
                return (
                  <div key={survey._id} className="overflow-x-auto mb-2">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          {mySurveyText.map((t, i) => (
                            <th key={i}>{t}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-xl">
                          <td className="flex flex-col text-[1rem]">
                            <span className="font-semibold text-secondary">
                              {survey?.surveyTitle}
                            </span>
                            <span>Created: {survey?.surveyCreateTime}</span>
                          </td>
                          <td className="text-1">
                            {survey?.surveyModifiedTime}
                          </td>
                          <td className="pl-8">0</td>
                          <td className="pl-8">
                            <BiEdit />
                          </td>
                          <td className="pl-8">
                            <BsCollection />
                          </td>
                          <td className="pl-8">
                            <TbBrandGoogleAnalytics />
                          </td>
                          <td className="pl-8">
                            <FiShare2 />
                          </td>
                          <td className="text-secondary pl-6">
                            <BsThreeDots />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default MySurveys;
