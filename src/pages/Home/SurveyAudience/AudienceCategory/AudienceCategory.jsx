import React from "react";

import SpecificCategory from "./SpecificCategory";

const categorys = [
  {
    id: 1,
    CategoryName: "Employees",
  },
  {
    id: 2,
    CategoryName: "Customers",
  },
  {
    id: 3,
    CategoryName: "Target Markets",
  },
  {
    id: 4,
    CategoryName: "Other",
  },
];

const AudienceCategory = () => {
  return (
    <div className="flex gap-4 justify-between mx-8 my-4">
      {categorys.map((category) => (
        <SpecificCategory
          key={category.id}
          category={category}
        ></SpecificCategory>
      ))}
    </div>
  );
};

export default AudienceCategory;
