import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrums from "../../components/Dashboard/Breadcrums";
import Loading from "../../components/Shared/Loading";

const PreviewSurvey = () => {
  const [preveiwSurveyData, setPreviewSurveyData] = useState({});
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/").slice(-1);
  // console.log(id)
  const getID = id[0];
  //   console.log(getID);

  useEffect(() => {
    try {
      setIsPreviewLoading(true);
      if (getID.length === 24) {
        getDataById(getID)
          .then((data) => {
            // console.log(data);
            setPreviewSurveyData(data);
            setIsPreviewLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setIsPreviewLoading(false);
          });
      }
    } catch (error) {
      console.log(error);
      setIsPreviewLoading(false);
    }
  }, [getID]);

  // get edit data
  const getDataById = async (survId) => {
    const response = await axios.get(
      `https://survey-bee-server.vercel.app/editsurvey/${survId}`
    );
    return response?.data;
  };
  console.log(preveiwSurveyData);
  return (
    <>
      {isPreviewLoading ? (
        <Loading />
      ) : (
        <>
          <div className="min-h-screen bg-[#f5f6fa]">
            <div className="pl-20 mt-3">
              <>
                <Breadcrums surveId={getID} />
              </>
              {/* outlets */}
              <div className="mx-auto w-full">
                <div>
                  <h2 className="text-2xl text-primary font-extrabold pt-10">
                    {preveiwSurveyData?.surveyTitle}
                  </h2>
                  {preveiwSurveyData?.questionsAndTypes?.map((qt, i) => (
                    <div key={i} className="mt-4">
                      <div>
                        <div>
                          <span className="text-xl">{i + 1}.</span>
                          <span className="text-xl"> {qt?.questions}</span>
                          <div>
                            {qt?.questionsType === "Comment Box" ? (
                              <textarea className="w-1/3 border border-gray-600 h-20"></textarea>
                            ) : undefined || qt?.questionsType === "Textbox" ? (
                              <input className="w-2/6 border border-gray-600 h-12" />
                            ) : undefined}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex pb-36 mt-4">
                    <button className="btn btn-secondary px-8 py-2">
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PreviewSurvey;
