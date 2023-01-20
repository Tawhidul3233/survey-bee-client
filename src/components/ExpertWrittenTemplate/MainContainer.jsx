import React from "react";
import Sidebar from "./Leftbar";
import TemplatesCard from "./TemplatesCard";
const templateCategories = [
  {
    id: 1,
    name: "Customers",
  },
  {
    id: 2,
    name: "Education",
  },
  {
    id: 3,
    name: "Employees",
  },
  {
    id: 4,
    name: "Events",
  },
  {
    id: 5,
    name: "Healthcare",
  },
  {
    id: 6,
    name: "Market Research",
  },
  {
    id: 7,
    name: "Nonprofit",
  },
  {
    id: 8,
    name: "Other",
  },
];
const MainContainer = () => {
  const hadleSearch = (e) => {
    e.preventDefault();
  };
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
            templateCategories={templateCategories}
          />
        </div>
        <div className="basis-3/4 mx-5 ">
          <div className="grid justify-center">
            <TemplatesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
