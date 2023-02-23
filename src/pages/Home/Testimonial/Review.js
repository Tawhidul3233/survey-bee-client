import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
  const { img, designation, des } = review;
  return (
    <div className="mx-auto bg-[#f5f6fa]">


      <div className="card card-body mx-auto w-80  hover:bg-base-100 hover:shadow-2xl border border-1 duration-300 h-[350px] rounded">
        <div className="avatar mx-auto">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt='people' />
          </div>
        </div>
        <h2 className="text-center mt-2 text-xl font-semibold">{designation}</h2>
        <p className='text-center'>{des}</p>
        <div className="card-actions justify-center">

          <Link to='/CustomerService'><button className="btn btn-link normal-case">Learn More</button></Link>

        </div>
      </div>
    </div>
  );
};

export default Review;