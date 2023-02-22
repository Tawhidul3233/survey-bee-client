import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Breadcrums from "../../components/Dashboard/Breadcrums";
import Loading from "../../components/Shared/Loading";
import { setActiveUser } from "../../features/userSlice";
import { user } from "../../features/userSlice";

const SurveyShare = () => {

  const activeUser = useSelector(user);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };


  const [submitSurvey, setSubmitSurvey] = useState(false)
  const submitSurveyData = (event) => {
    event.preventDefault()
    setSubmitSurvey(true)
  }







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
  // console.log(preveiwSurveyData);





  return (
    <>
      {submitSurvey ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">Thanks for your response</h1>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen  rounded-md w-full sm:w-8/12 bg-[#eef0f4] mx-auto">
            <div className=" mx-5 sm:mx-15 sm:mx-10 sm:mt-3 sm:mb-3">
              {/* <>
                <Breadcrums surveId={getID} />
              </> */}
              <div className="mx-auto ">
                <div className="">
                  <h2 className="text-2xl text-center text-primary font-extrabold pt-10">
                    {preveiwSurveyData?.surveyTitle}
                  </h2>
                  <p className="text-center my-5">
                    {preveiwSurveyData?.surveyDescription}
                  </p>
                  <form onSubmit={submitSurveyData}>
                    {preveiwSurveyData?.questionsAndTypes?.map((qt, i) => (
                      <div key={i} className="mt-4 ">
                        <div>
                          <div className="">
                            <div className="my-3">
                              <span className="text-xl ">{i + 1}.</span>
                              <span className="text-xl "> {qt?.questions} ?</span>
                            </div>
                            <div>
                              {qt?.questionsType === "Comment Box" ? (
                                <textarea className=" w-full  border  h-16 px-2" placeholder="Write your opinion:.."></textarea>
                              ) : undefined || qt?.questionsType === "Textbox" ? (
                                <input className="w-full   border  h-8 px-2 " placeholder="Answer:.." />
                              ) : undefined || qt?.questionsType === "Multiple choice" ?

                                <>
                                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1  w-full  ">
                                    {
                                      qt?.optionAnswers?.map((option, index) => (
                                        <div key={index} className="mb-4 bg-success text-white rounded-sm ">
                                          <input
                                            type="radio"
                                            id={option}
                                            name={option.answer}
                                            value={option}
                                          />
                                          <label htmlFor={option} className="ml-2">
                                            {option.answer}
                                          </label>
                                        </div>
                                      ))
                                    }
                                  </div>
                                </>

                                : undefined

                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex pb-20 mt-8 w-full ">
                      {activeUser?.user ?
                        <button type="button" className="btn btn-success px-4 py-2 text-center mx-auto" onClick={handleCopyLink}>
                          {
                            isCopied ? "Link copied!" : "Copy link"
                          }
                        </button> :
                        <button type="submit" className="btn btn-success px-4 py-2 text-center mx-auto">
                          Submit
                        </button>
                      }
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SurveyShare;