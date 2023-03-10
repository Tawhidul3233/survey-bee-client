import React from "react";
import { useState } from "react";
import { AiFillEdit, AiOutlineShareAlt, AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import DeletePermissionModal from "./DeletePermissionModal";
import ShareModal from "./ShareModal";
import SurveyDeleteButton from "./SurveyDeleteButton";

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
  const navigate = useNavigate();

  // console.log(surveyModifiedTime);

  // handle survey edit
  const handleSurveyEdit = (editSurvId) => {
    // console.log("clicked", editSurvId);
    if (editSurvId) {
      return navigate(`/dashboard/editsurvey/${editSurvId}`);
    }
  };

  return (
    <>
      <div className="mt-6">
        <div className="w-full border border-gray-600 hover:border-primary px-2">
          <p className="bg-red-500 w-12 px-1 text-[.8rem] text-base-100">
            DRAFT
          </p>
          <div className="flex mt-1 mb-4">
            <div className="lg:w-4/12 border-r-2 border-r-gray-800">
              <h2 className="text-xl font-semibold">{surveyTitle}</h2>
              <h4 className="text-[.8rem]">
                Created: <span>{surveyCreateTime}</span>{" "}
                <span className="px-2">|</span> Modified:{" "}
                <span>{surveyModifiedTime}</span>
              </h4>
            </div>
            <div className="lg:w-2/12 border-r-2 border-r-gray-800 py-2 lg:pl-8 text-center px-1">
              <p className="text-xl">
                {questionsAndTypes?.length ? questionsAndTypes?.length : 0}
              </p>
              <h3 className="text-sm">Questions</h3>
            </div>
            <div className="lg:w-2/12 border-r-2 border-r-gray-800 px-4 py-2 text-sm">
              {!questionsAndTypes?.length ? (
                <p className="w-4 h-1 bg-gray-700"></p>
              ) : (
                `${questionsAndTypes?.length} min`
              )}
              <p className="text-sm">Estimated time to complete</p>
            </div>
            <div className="lg:w-2/12 border-r-2 border-r-gray-800 px-4 py-2 text-sm text-center">
              <p className="text-xl">0</p>
              <h3>Collectors</h3>
            </div>
            <div className="lg:w-2/12 w-1/12 flex justify-center items-center text-secondary">
              <div
                className="lg:w-14 h-12 flex flex-col items-center justify-center"
                onClick={() => setIsThreedotOptionsOpen(!isThreedotOptionsOpen)}
              >
                <div className="flex lg:gap-x-1 gap-y-1 cursor-pointer flex-col-reverse">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
                <div className="lg:visible invisible">
                  <p className="cursor-pointer">optionAnswers</p>
                </div>
              </div>
              <div className="relative">
                {isThreedotOptionsOpen && (
                  <div className="h-42 w-44 border border-gray-300 z-50 shadow-md absolute bg-base-100 lg:left-[-56px] left-[-170px] top-6">
                    {/* <Link
                      to={`/dashboard/editsurvey/${recentSurv?._id}`} */}
                    <button
                      onClick={() => handleSurveyEdit(surveyTargetDeleteId)}
                      className="flex items-center gap-x-2 text-gray-600 hover:bg-gray-200 w-full p-2 cursor-pointer"
                    >
                      <span>
                        <AiFillEdit />
                      </span>
                      <span>Edit</span>
                      {/* </Link> */}
                    </button>

                    {/* The button to open plans and pricing modal */}
                    <label
                      htmlFor="Share-modal"
                      className="flex items-center gap-x-2 text-gray-600 hover:bg-gray-200 w-full p-2 cursor-pointer"
                    >
                      {/* <Share button > */}
                      <span>
                        <AiOutlineShareAlt />
                      </span>
                      <span>Share</span>
                    </label>

                    <ShareModal />

                    {/* <Link to='/plans-pricing'>Share</Link> */}

                    {/* The button to open modal */}
                    {/* <label
                    htmlFor="delete_permission_modal"
                    className="flex items-center gap-x-2 text-gray-600 hover:bg-gray-200 w-full p-2 cursor-pointer"
                  >
             
                    <span>
                      <AiTwotoneDelete />
                    </span>
                    <span>Delete</span>
                 
                  </label> */}
                    <SurveyDeleteButton />
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
    </>
  );
};

export default RecentSurveys;
