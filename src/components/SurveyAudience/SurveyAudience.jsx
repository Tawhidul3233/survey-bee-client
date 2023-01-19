import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AudienceCategory from "./AudienceCategory/AudienceCategory";
import CardItem from "./AudienceCategory/CardItem";

const SurveyAudience = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const {
    isLoading,
    error,
    data: categorys,
  } = useQuery({
    queryKey: ["Audience"],
    queryFn: () =>
      fetch("http://localhost:5000/surveyAudience").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleClick = (id) => {
    setSelectedCategoryId(id);
  };
  const selectedCategory = categorys.find((c) => c._id === selectedCategoryId);
  const selectedCards = selectedCategory
    ? selectedCategory.card
    : categorys[0].card;

  return (
    <div className="my-4 bg-slate-100 rounded-md w-full mx-auto md:w-3/4 md:mx-auto p-5">
      <h1 className="font-semibold text-center text-3xl">
        Who is Our survey Audience?
      </h1>
      <AudienceCategory
        handleClick={handleClick}
        selectedCategoryId={selectedCategoryId}
        categorys={categorys}
      />
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          {selectedCards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              selectedCategoryId={selectedCategoryId}
            ></CardItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SurveyAudience;
