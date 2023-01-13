import React from "react";

import SpecificCategory from "./SpecificCategory";

const categorys = [
  {
    id: 1,
    CategoryName: "Employees",
    card: [
      {
        id: 1,
        img: "https://i.ibb.co/ssq240R/card1.jpg",
        title: "Employee Feedback",
        desc: "Build a better workplace by hearing from your employes",
      },
      {
        id: 2,
        img: "https://i.ibb.co/ncWK77P/card2.jpg",
        title: "Template",
        desc: "Learn How employees feel with Employee engagement serveys",
      },
      {
        id: 3,
        img: "https://i.ibb.co/hRq73pr/card3.jpg",
        title: "Template",
        desc: "set up employee review with 360 degree evaluation survey",
      },
      {
        id: 4,
        img: "https://i.ibb.co/xJHtSCR/card4.jpg",
        title: "Survey Builder",
        desc: "use survey monkey genius to build employee surveys quickley",
      },
      {
        id: 5,
        img: "https://i.ibb.co/Njpkc2J/card5.jpg",
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
        id: 1,
        img: "https://i.ibb.co/ssq240R/card1.jpg",
        title: "Employee Feedback",
        desc: "Build a better workplace by hearing from your employes",
      },
      {
        id: 2,
        img: "https://i.ibb.co/ncWK77P/card2.jpg",
        title: "Template",
        desc: "Learn How employees feel with Employee engagement serveys",
      },
      {
        id: 3,
        img: "https://i.ibb.co/hRq73pr/card3.jpg",
        title: "Template",
        desc: "set up employee review with 360 degree evaluation survey",
      },
      {
        id: 4,
        img: "https://i.ibb.co/xJHtSCR/card4.jpg",
        title: "Survey Builder",
        desc: "use survey monkey genius to build employee surveys quickley",
      },
      {
        id: 5,
        img: "https://i.ibb.co/Njpkc2J/card5.jpg",
        title: "Success Story",
        desc: "Service credit union build a covid safe workplace",
      },
    ],
  },
  {
    id: 3,
    CategoryName: "Target Markets",
    card: [
      {
        id: 1,
        img: "https://i.ibb.co/ssq240R/card1.jpg",
        title: "Employee Feedback",
        desc: "Build a better workplace by hearing from your employes",
      },
      {
        id: 2,
        img: "https://i.ibb.co/ncWK77P/card2.jpg",
        title: "Template",
        desc: "Learn How employees feel with Employee engagement serveys",
      },
      {
        id: 3,
        img: "https://i.ibb.co/hRq73pr/card3.jpg",
        title: "Template",
        desc: "set up employee review with 360 degree evaluation survey",
      },
      {
        id: 4,
        img: "https://i.ibb.co/xJHtSCR/card4.jpg",
        title: "Survey Builder",
        desc: "use survey monkey genius to build employee surveys quickley",
      },
      {
        id: 5,
        img: "https://i.ibb.co/Njpkc2J/card5.jpg",
        title: "Success Story",
        desc: "Service credit union build a covid safe workplace",
      },
    ],
  },
  {
    id: 4,
    CategoryName: "Other",
    card: [
      {
        id: 1,
        img: "https://i.ibb.co/ssq240R/card1.jpg",
        title: "Employee Feedback",
        desc: "Build a better workplace by hearing from your employes",
      },
      {
        id: 2,
        img: "https://i.ibb.co/ncWK77P/card2.jpg",
        title: "Template",
        desc: "Learn How employees feel with Employee engagement serveys",
      },
      {
        id: 3,
        img: "https://i.ibb.co/hRq73pr/card3.jpg",
        title: "Template",
        desc: "set up employee review with 360 degree evaluation survey",
      },
      {
        id: 4,
        img: "https://i.ibb.co/xJHtSCR/card4.jpg",
        title: "Survey Builder",
        desc: "use survey monkey genius to build employee surveys quickley",
      },
      {
        id: 5,
        img: "https://i.ibb.co/Njpkc2J/card5.jpg",
        title: "Success Story",
        desc: "Service credit union build a covid safe workplace",
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
