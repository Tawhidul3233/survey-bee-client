import React from 'react';

const RequestCx = () => {
     return (
          <div>
               <div className=' py-10'>
                    <div className='text-center  my-10 '>
                         <h2 className='text-2xl sm:text-3xl font-bold '> Request a demo Survey</h2>
                    </div>
                    <form action=" " className=' mx-auto sm:w-3/5 '>
                         <div className=' grid gap-4'>
                              <div className="form-control w-full">
                                   <label className="label">
                                        <span className="label-text text-white">Email?</span>
                                   </label>
                                   <input type="text" placeholder="Email" className="input input-bordered w-full " />
                              </div>
                         </div>
                         <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4'>
                              <div className="form-control w-full ">
                                   <label className="label">
                                        <span className="label-text text-white"> First name?</span>
                                   </label>
                                   <input type="text" placeholder="First name" className="input input-bordered w-full " />
                              </div>
                              <div className="form-control w-full ">
                                   <label className="label">
                                        <span className="label-text text-white">Last name?</span>
                                   </label>
                                   <input type="text" placeholder="Last name" className="input input-bordered w-full " />
                              </div>
                         </div>
                         <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4'>
                              <div className="form-control w-full  ">
                                   <label className="label">
                                        <span className="label-text text-white"> Your company name?</span>
                                   </label>
                                   <input type="text" placeholder="Company name" className="input input-bordered w-full  " />
                              </div>
                              <div className="form-control w-full  ">
                                   <label className="label">
                                        <span className="label-text text-white">Your Phone?</span>
                                   </label>
                                   <input type="text" placeholder="Phone number" className="input input-bordered w-full  " />
                              </div>
                         </div>
                         <div className=' grid gap-4'>
                              <div className="form-control w-full  ">
                                   <label className="label">
                                        <span className="label-text text-white">Select you location?</span>
                                   </label>
                                   <select className="select select-bordered">
                                        <option disabled selected>Bangladesh</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>Others</option>
                                   </select>
                              </div>
                         </div>
                         <div className="form-control mt-5">
                              <label className="cursor-pointer label">
                                   <input type="checkbox"  className="checkbox checkbox-success" />
                                   <span className="label-text mx-3">I wish to receive other information about Momentive like product updates, news, information, and special promotions.
                                        Visit the Privacy Notice for information on how we use your information.
                                        You can unsubscribe anytime using a link at the bottom of our communications.

                                        ⁣⁢By clicking 'Submit', I agree to use of my details to contact me about my specific request or inquiry.⁫</span>
                              </label>
                         </div>
                         <div className=' mx-auto text-center my-10'>
                              <button className='btn btn-success text-white w-4/5 sm:w-2/5'> Submit </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default RequestCx;