import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const ApplyBanner = () => {
     return (
          <div className=" text-center my-20">
               <div>
                    <h1 className=' text-2xl md:text-5xl font-bold'>Make amazing happen</h1>
               </div>
               <div>
                    <p className="my-10 mx-auto w-4/5 md:w-3/5">
                         {" "}
                         Streamline how you collect and review applications for grants, scholarships, awards and other programs. Simplify applications, automate workflows, and select your best candidates, faster.{" "}
                    </p>
               </div>
               <div className=' grid grid-flow-row md:grid-flow-col justify-center '>
                    <Link to="/login" className='  mx-auto'>
                         <button className="btn btn:md btn-warning rounded-sm  ">
                              See how it work
                         </button>
                    </Link>
                    <Link to="/login" className='ml-5 mx-auto my-3 md:my-0'>
                         <button className="btn btn:md btn-success rounded-sm  ">
                              View a demo
                         </button>
                    </Link>
               </div>
          </div>
     );
};

export default ApplyBanner;