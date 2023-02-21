import React from "react";
import { Link } from "react-router-dom";

const FeedbackDetails = ({ feedback }) => {
  const { img, des, title, btn } = feedback;
  return (
    <div className="card text-primary-content mx-auto mb-4">
      <div className="card card-body mx-auto w-96  hover:bg-base-100 hover:shadow-2xl border border-1 duration-300 h-[450px] rounded">
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
