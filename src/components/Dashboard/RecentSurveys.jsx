import React from "react";
import { useState } from "react";
import { AiOutlineShareAlt, AiTwotoneDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import DeletePermissionModal from "./DeletePermissionModal";

const RecentSurveys = ({ recentSurv, loading, handleSurveyDelete }) => {
  const [isThreedotOptionsOpen, setIsThreedotOptionsOpen] = useState(false);
  //   console.log(recentSurv, loading);
  const {
    surveyTitle,
    surveyCreateTime,
    surveyModifiedTime,
    questionsAndTypes,
    _id: surveyTargetDeleteId,
  } = recentSurv;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-6">
          <div className="w-full border border-gray-600 hover:border-primary px-2">
            <p className="bg-red-500 w-12 px-1 text-[.8rem] text-base-100">
              DRAFT
            </p>
            <div className="flex mt-1 mb-4">
              <div className="w-4/12">
                <h2 className="text-xl font-semibold">{surveyTitle}</h2>
                <h4 className="text-[.8rem]">
                  Created: <span>{surveyCreateTime}</span>{" "}
                  <span className="px-2">|</span> Modified:{" "}
                  <span>{surveyModifiedTime}</span>
                </h4>
              </div>
              <div className="w-2/12 border-r-2 border-r-gray-800 py-2 pl-8">
                <p className="text-xl">
                  {questionsAndTypes?.length ? questionsAndTypes?.length : 0}
                </p>
                <h3>Questions</h3>
              </div>
              <div className="w-2/12 border-r-2 border-r-gray-800 px-4 py-2 text-[1rem]">
                {!questionsAndTypes?.length ? (
                  <p className="w-4 h-1 bg-gray-700"></p>
                ) : (
                  `${questionsAndTypes?.length} min`
                )}
                <p>Estimated time to complete</p>
              </div>
              <div className="w-2/12 border-r-2 border-r-gray-800 px-4 py-2 text-[1rem]">
                <p className="text-xl">0</p>
                <h3>Collectors</h3>
              </div>
              <div className="w-2/12 flex justify-center items-center text-secondary">
                <div
                  className="w-14 h-12 flex flex-col items-center justify-center"
                  onClick={() =>
                    setIsThreedotOptionsOpen(!isThreedotOptionsOpen)
                  }
                >
                  <div className="flex gap-x-1 cursor-pointer">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                  <div className="">
                    <p className="cursor-pointer">Options</p>
                  </div>
                </div>
                <div className="relative">
                  {isThreedotOptionsOpen && (
                    <div className="h-52 w-44 border border-gray-300 z-50 shadow-md absolute bg-base-100 left-[-56px] top-6">


                      {/* The button to open plans and pricing modal */}
                      <label htmlFor="Share-modal" className="flex items-center gap-x-2 text-gray-600 hover:bg-gray-200 w-full p-2 cursor-pointer">
                        {/* <Share button > */}
                        <span>
                          <AiOutlineShareAlt />
                        </span>
                        <span>Share</span>
                      </label>

                      {/* Put this part before </body> tag */}
                      <input type="checkbox" id="Share-modal" className="modal-toggle" />
                      <div className="modal">
                        <div className="modal-box w-8/12 max-w-5xl">
                          <label htmlFor="Share-modal" className="absolute right-6 top-4 font-bold">✕</label>
                          <div className="flex">
                            <div className="w-3/12">
                              <h1>amination</h1>
                            </div>
                            <div className="w-7/12 mx-auto">
                              <h1 className="text-4xl font-bold my-2">Share Your Survey</h1>
                              <h3 className="text-2xl font-bold">Work better, together.</h3>
                              <p className="py-4 mb-5">Easily share your survey to anyone with an email address and use permissions to choose what others can view and edit. You can give team members permission to make changes, edit, and analyze the results of your survey.</p>
                              <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                                <button className="px-6 py-2 border border-green-500 rounded-sm dark:text-green-500">No Thanks</button>
                                <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-yellow-500 font-bold dark:text-gray-50">Take a Plan</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* The button to open modal */}
                      <label
                        htmlFor="delete_permission_modal"
                        className="flex items-center gap-x-2 text-gray-600 hover:bg-gray-200 w-full p-2 cursor-pointer"
                      >
                        {/* <button > */}
                        <span>
                          <AiTwotoneDelete />
                        </span>
                        <span>Delete</span>
                        {/* </button> */}
                      </label>
                      <>
                        <DeletePermissionModal
                          handleSurveyDelete={handleSurveyDelete}
                          surveyTargetDeleteId={surveyTargetDeleteId}
                          surveyTargetTitle={surveyTitle}
                        />
                      </>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentSurveys;
