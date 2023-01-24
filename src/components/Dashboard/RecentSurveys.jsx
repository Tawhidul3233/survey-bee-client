import React from "react";
import { useState } from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
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
                      <Link
                        className="flex items-center gap-x-2 text-gray-600 hover:bg-gray-200 w-full p-2 cursor-pointer"
                        to="/dashboard/createsurveyquestions"
                      >
                        <span>
                          <AiFillEdit />
                        </span>
                        <span>Edit</span>
                      </Link>
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
