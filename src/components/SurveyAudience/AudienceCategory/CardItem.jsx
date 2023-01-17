import React from "react";

const CardItem = ({ card }) => {
  const { img, title, desc } = card;
  return (
    <div>
      <a
        style={{ backgroundImage: `url(${img})` }}
        href="/card"
        className="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
      >
        <div ClassName="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
          <h3 ClassName="text-2xl font-bold">{title}</h3>

          <p ClassName="text-sm">{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default CardItem;
