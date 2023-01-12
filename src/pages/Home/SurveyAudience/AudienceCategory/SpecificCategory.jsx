import React from "react";
import { useState } from "react";

const SpecificCategory = ({ category }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (id) => {
    setIsClicked(!isClicked);
    console.log(id);
  };
  return (
    <div>
      <button
        onClick={() => handleClick(category.id)}
        className={`bg-white py-2 px-6 rounded ${
          isClicked ? "bg-blue-500 text-white" : ""
        } `}
      >
        {category.CategoryName}
      </button>
    </div>
  );
};

export default SpecificCategory;
