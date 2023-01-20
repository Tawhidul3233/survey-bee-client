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
    <div className="my-10 grid grid-cols-4 gap-2">
      {templateCard.map((card) => (
        <Link
          style={{
            backgroundImage: `url(${card.img})`,
            backgroundRepeat: "no-repeat",
          }}
          to={`/${card.name}`}
          key={card.id}
          className="relative block overflow-hidden "
        >
          <div className="relative p-8 pt-40 text-white ">
            <div className=" flex items-center">
              <h3 className="text-2xl font-bold block ">{card.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TemplatesCard;
