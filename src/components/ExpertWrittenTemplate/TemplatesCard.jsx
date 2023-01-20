import React from "react";
import { Link } from "react-router-dom";

const templateCard = [
  {
    id: 1,
    name: "Employe",
    img: "https://i.ibb.co/6nXBm68/360-Degree-Employee-Evaluation.png",
  },
  {
    id: 2,
    name: "Customer Satisfaction",
    img: "https://i.ibb.co/zQ7hgVy/customer-satisfaction-survey-template-1.png",
  },
  {
    id: 3,
    name: "Customer Service",
    img: "https://i.ibb.co/mcnJ593/customer-service-survey-template.png",
  },
  {
    id: 4,
    name: "Employee Engagement",
    img: "https://i.ibb.co/YyDWF0N/employee-engagement-survey-template.png",
  },
  {
    id: 5,
    name: "Management Performance",
    img: "https://i.ibb.co/YcbBSdG/management-performance-survey-template.png",
  },
  {
    id: 6,
    name: "Product Survey",
    img: "https://i.ibb.co/1RBX0n0/Product-Survey.png",
  },
  {
    id: 7,
    name: "Product Testing Survey",
    img: "https://i.ibb.co/BBj5Tyx/product-testing-survey-template.png",
  },
  {
    id: 8,
    name: "University Student",
    img: "https://i.ibb.co/WWgmzpM/university-student-satisfaction-survey-template.png",
  },
];
const TemplatesCard = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4.  gap-4">
      {templateCard.map((card) => (
        <Link
          style={{
            backgroundImage: `url(${card.img})`,
            backgroundRepeat: "no-repeat",
          }}
          to={`/${card.name}`}
          key={card.id}
          className="w-62 h-56 "
        >
          <div className=" text-white rounded">
            <h3 className="text-xl font-bold  mt-20 p-4 ">{card.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TemplatesCard;
