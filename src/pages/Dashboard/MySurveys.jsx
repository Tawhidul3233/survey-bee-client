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
import SurveyCreateButton from "../../components/Dashboard/SurveyCreateButton";
import { Link, useNavigate } from "react-router-dom";
import ShareModal from "../../components/Dashboard/ShareModal";

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
  const [surveysError, setSurveysError] = useState("");
  const [surveysLoading, setSurveysLoading] = useState(false);
  const [isThreedotOpen, setIsThreedotOpen] = useState(false);
  const navigate = useNavigate();

  // console.log(surveys)
  // get all surveys
  useEffect(() => {
    setSurveysLoading(true);
    getUserAllSurveys(activeUser?.user?.email)
      .then((data) => {
        // console.log(data);
        if (!data) {
          setSurveysLoading(false);
          return setSurveysError({ message: "Network Error" });
        }
        setSurveys(data);
        setSurveysLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setSurveysError(error);
        setSurveysLoading(false);
      });
  }, [activeUser?.user?.email]);

  // console.log("observing error", surveysError);

  // handle survey edit
  const handleSurveyEdit = (editSurvId) => {
    // console.log("clicked", editSurvId);
    if (editSurvId) {
      return navigate(`/dashboard/editsurvey/${editSurvId}`);
    }
  };

  return (
    <>
      {surveysLoading ? (
        <Loading />
      ) : (
        <>
          <section className="mx-auto w-full bg-[#F4F5F5] pt-10">
            <ShareModal />
            <>
              {surveysError.message && !surveysLoading ? (
                <p className="text-center text-3xl text-neutral">
                  Something went wrong! <br /> please check your network!!!
                </p>
              ) : (
                ""
              )}

              {surveys?.length === 0 && !surveysLoading && (
                <p className="text-center text-3xl text-neutral">
                  You don't have any surveys
                </p>
              )}
            </>
            <div className="w-[70vw] mx-auto">
              {surveys?.map((survey) => {
                return (
                  <div key={survey._id} className="overflow-x-auto pb-2">
                    <table className="table w-full text-center">
                      <thead>
                        <tr>
                          {mySurveyText.map((t, i) => (
                            <th key={i}>{t}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-xl w-full">
                          <td className="flex flex-col text-[1rem]">
                            <span className="font-semibold text-secondary">
                              {survey?.surveyTitle}
                            </span>
                            <span>Created: {survey?.surveyCreateTime}</span>
                          </td>
                          <td className="text-1">
                            {survey?.surveyModifiedTime}
                          </td>
                          <td className="lg:pl-8 p-0 w-3/12">0</td>
                          <td className="lg:pl-8 p-0 w-3/12" title="design your survey">
                            <button
                              onClick={() => handleSurveyEdit(survey._id)}
                            >
                              <BiEdit className="text-secondary" />
                            </button>
                          </td>
                          <td className="lg:pl-8 p-0 w-3/12">
                            <Link to={`/buysurvey/${survey._id}`}> <BsCollection className="text-secondary" /> </Link>

                          </td>
                          <td className="lg:pl-8 p-0 w-3/12">
                            <TbBrandGoogleAnalytics className="text-secondary" />
                          </td>

                          <td className="pl-8 ">
                            <label htmlFor="Share-modal" >
                              <span className="w-3/12 cursor-pointer ">
                                <FiShare2 className="text-secondary" />
                              </span>
                            </label>
                          </td>

                          <td
                            className="text-secondary pl-6"
                            onClick={() => setIsThreedotOpen(!isThreedotOpen)}
                          >
                            <div className="flex flex-col">
                              <BsThreeDots className="text-secondary absolute top-20" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
            {!surveysError?.message && (
              <div>
                <SurveyCreateButton
                  className={{
                    hidden: "hidden",
                    mt: "mt-0",
                    flexStart: "items-start",
                    icon: "+",
                    width: "w-40",
                  }}
                />
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default MySurveys;
