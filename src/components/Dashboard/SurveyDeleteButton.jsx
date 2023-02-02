import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const SurveyDeleteButton = () => {
  return (
    <>
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
    </>
  );
};

export default SurveyDeleteButton;
