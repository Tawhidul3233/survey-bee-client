import React from "react";

import SpecificCategory from "./SpecificCategory";

const categorys = [
  {
    id: 1,
    CategoryName: "Employees",
    card: [
      {
        img: "",
        title: "Employee Feedback",
        desc: "Build a better workplace by hearing from your employes",
      },
      {
        img: "",
        title: "Template",
        desc: "Learn How employees feel with Employee engagement serveys",
      },
      {
        img: "",
        title: "Template",
        desc: "set up employee review with 360 degree evaluation survey",
      },
      {
        img: "",
        title: "Survey Builder",
        desc: "use survey monkey genius to build employee surveys quickley",
      },
      {
        img: "",
        title: "Success Story",
        desc: "Service credit union build a covid safe workplace",
      },
    ],
  },
  {
    id: 2,
    CategoryName: "Customers",
    card: [
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
    ],
  },
  {
    id: 3,
    CategoryName: "Target Markets",
    card: [
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
    ],
  },
  {
    id: 4,
    CategoryName: "Other",
    card: [
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
    ],
  },
];

const AudienceCategory = () => {
  return (
    <div className="">
      <div className="flex gap-4 justify-between mx-8 my-4">
        {categorys.map((category) => (
          <SpecificCategory
            key={category.id}
            category={category}
          ></SpecificCategory>
        ))}
      </div>
    </div>
  );
};

export default AudienceCategory;
