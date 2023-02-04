import React, { useState } from "react";
import { CheckboxGroup } from "../CustomCheckbox/CheckboxGroup";

const Sidebar = ({ surveyCategoryData, hadleSearch, setCheckList }) => {
  return (
    <div className="grid justify-center">
      <h1 className=" my-4  text-lg">{surveyCategoryData.length} Categorys</h1>

      <form onSubmit={hadleSearch} className="flex items-center">
        <label htmlFor="templaeSearch" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="templaeSearch"
            className="  border-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5     "
            placeholder="Search"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <h1 className="my-4 font-semibold">Filter by survey type </h1>
      <div className="my-6">
        <CheckboxGroup
          list={surveyCategoryData.map((item) => item.survey_title)}
          setCheckList={setCheckList}
        />
        {/* {surveyCategoryData.map((category, index) => (
          <div key={index} class="flex items-center mb-4">
            <input
              id={`default-checkbox ${index}`}
              onChange={(event) => handleCheckbox(event, index)}
              type="checkbox"
              value={category.survey_title}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for={`default-checkbox ${index}`}
              class="ml-2 text-sm font-medium  "
            >
              {category.survey_title}
            </label>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Sidebar;
