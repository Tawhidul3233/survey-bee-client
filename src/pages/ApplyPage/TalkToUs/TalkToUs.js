import React from 'react';

const TalkToUs = () => {
     return (
          <div className=' bg-[#05467e] py-10'>
               <div className='text-center  text-white  my-10 '>
                    <h2 className='text-2xl sm:text-3xl font-bold '> Talk to us</h2>
                    <p className=' w-5/6 sm:w-3/5 mx-auto mt-3'>Want to learn how SurveyMonkey Apply can help your organization? Interested in seeing a demo? Fill out the form below and we'll get in touch!</p>
               </div>
               <form action=" " className=' mx-2'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4'>
                         <div className="form-control w-full">
                              <label className="label">
                                   <span className="label-text text-white">What is your first name?</span>
                              </label>
                              <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                         </div>
                         <div className="form-control w-full ">
                              <label className="label">
                                   <span className="label-text text-white">What is your last name?</span>
                              </label>
                              <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                         </div>
                    </div>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4'>
                         <div className="form-control w-full ">
                              <label className="label">
                                   <span className="label-text text-white"> What is your email?</span>
                              </label>
                              <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                         </div>
                         <div className="form-control w-full ">
                              <label className="label">
                                   <span className="label-text text-white">What is your phone?</span>
                              </label>
                              <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                         </div>
                    </div>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4'>
                         <div className="form-control w-full  ">
                              <label className="label">
                                   <span className="label-text text-white"> Your company name?</span>
                              </label>
                              <input type="text" placeholder="Type here" className="input input-bordered w-full  " />
                         </div>
                         <div className="form-control w-full  ">
                              <label className="label">
                                   <span className="label-text text-white">Your job title?</span>
                              </label>
                              <input type="text" placeholder="Type here" className="input input-bordered w-full  " />
                         </div>
                    </div>
                    <div  className=' grid grid-cols-1 sm:grid-cols-2 gap-4'>
                         <div className="form-control w-full  ">
                              <label className="label">
                                   <span className="label-text text-white">Select you location?</span>
                              </label>
                              <select className="select select-bordered">
                                   <option disabled selected>Pick one</option>
                                   <option>Star Wars</option>
                                   <option>Harry Potter</option>
                                   <option>Lord of the Rings</option>
                                   <option>Planet of the Apes</option>
                                   <option>Star Trek</option>
                              </select>
                         </div>
                         <div className="form-control w-full  ">
                              <label className="label ">
                                   <span className="label-tex text-white">Select Organization Type?</span>
                              </label>
                              <select className="select select-bordered">
                                   <option disabled selected>Pick one</option>
                                   <option>Star Wars</option>
                                   <option>Harry Potter</option>
                                   <option>Lord of the Rings</option>
                                   <option>Planet of the Apes</option>
                                   <option>Star Trek</option>
                              </select>
                         </div>
                    </div>
                    <div className=' mx-auto text-center my-10'>
                         <button className='btn btn-success text-white w-4/5 sm:w-2/5'> Contact us </button>
                    </div>
               </form>
          </div>
     );
};

export default TalkToUs;