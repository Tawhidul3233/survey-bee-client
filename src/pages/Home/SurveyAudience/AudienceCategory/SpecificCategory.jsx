import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SpecificCategory = ({ category }) => {
  const { CategoryName, card } = category;
  console.log(card);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <Link
        onClick={handleClick}
        className={`bg-white py-2 px-6 rounded ${
          isClicked ? "bg-blue-500 text-white" : ""
        } `}
      >
        {CategoryName}
      </Link>
    </div>
  );
};

export default SpecificCategory;
