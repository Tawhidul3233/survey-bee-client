import React from "react";
import { Link } from "react-router-dom";

const FeedbackDetails = ({ feedback }) => {
  const { img, des, title, btn } = feedback;
  return (
    <div className="card text-primary-content">
      <div className="card-body lg:w-2/3 mx-auto">
        <div>
          <img src={img} alt="people" className="mx-auto" />
        </div>
        <h2 className="text-center mt-2 text-xl font-semibold">{title}</h2>
        <p className="text-center">{des}</p>
        <div className="card-actions justify-center mt-5">
          <Link to='/CustomerService'>
          <button className="btn bg-white btn-success text-black text-xs normal-case">
            {btn}
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
