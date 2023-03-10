import React from "react";

const AudienceCategory = ({ categorys, handleClick, selectedCategoryId }) => {
  //   const [activeAudience, setActiveAudience] = useState();

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-4 justify-between mx-8 my-4">
        {categorys.map((category) => (
          <button
            key={category._id}
            onClick={() => handleClick(category._id)}
            className={`bg-white px-5 py-2 text-sm md:text-lg md:px-5 md:py-2 rounded ${
              selectedCategoryId === category._id
                ? "bg-gradient-to-r from-lime-500 to-cyan-400 hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-600 text-white"
                : ""
            }`}
          >
            {category.CategoryName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AudienceCategory;
