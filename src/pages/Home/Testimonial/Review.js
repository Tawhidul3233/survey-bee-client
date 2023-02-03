import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({review}) => {
            const {img,designation,des}=review;
    return (
        <div className="card text-primary-content">
            
           
  <div className="card-body">
  <div className="avatar mx-auto">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt='people'/>
  </div>
</div>
    <h2 className="text-center mt-2 text-xl font-semibold">{designation}</h2>
    <p className=''>{des}</p>
    <div className="card-actions justify-center">

      <Link to='/CustomerService'><button className="btn btn-link normal-case">Learn More</button></Link>
    
    </div>
  </div>
</div>
    );
};

export default Review;