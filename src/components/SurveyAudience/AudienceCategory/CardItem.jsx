import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ card, selectedCategoryId }) => {
  const { img, title, desc } = card;
  return (
    <div>
      <Link
        style={{ backgroundImage: `url(${img})` }}
        to={`/survey-Audience/${title}/${selectedCategoryId}`}
        className="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat transform 
        transition duration-1000 hover:scale-110"
      >
        <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
          <h3 className="text-2xl font-bold">{title}</h3>

          <p className="text-sm">{desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
