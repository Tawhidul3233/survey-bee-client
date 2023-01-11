import React from 'react';

const Register = () => {
     return (
          <div>
               <div className='h-[792px] w-[1160px] mx-auto mt-10 rounded-3xl grid grid-cols-5 border shadow-md'>
                    <div className=' col-span-2 bg-[#00C38B] rounded-tl-3xl rounded-bl-3xl '>
                         <div className=''>
                              <img className='mt-10 ml-16 w-24' src='https://i.ibb.co/1X6nFpH/survey-bee-removebg-preview.png'  alt="" />
                              <p className=' font-semibold text-3xl my-5 ml-16 text-white '> SurveyBee </p>
                         </div>
                         <div className=' ml-16 h-full mt-64 '>
                              <p className=' w-5/6 text-[24px] text-left text-[#F9E2BA]'> Say hello to global food and beverage producers and suppliers, all in all place</p>
                         </div>
                    </div>

                    <div className=' col-span-3'>
                         <div>
                              <div className=' mt-20 ml-10 w-2/3'>
                                   <p className=' text-[34px] font-semibold text-left'> Let's started <br /> with a silmple few steps</p>
                              </div>
                              <form className=' mt-10 ml-10 '>
                                   <div className="form-control w-3/4 ">
                                        <label className="label">
                                             <p className="label-text text-[16px]">Email<span className='text-[#E33D5F]'>*</span></p>
                                        </label>
                                        <input type="text" className="input w-full " /> <hr />
                                   </div>
                                   <div className="form-control w-3/4 ">
                                        <label className="label">
                                             <p className="label-text text-[16px]">Full name<span className='text-[#E33D5F]'>*</span></p>
                                        </label>
                                        <input type="text" className="input w-full " /> <hr />
                                   </div>
                                   <div className="form-control w-3/4 ">
                                        <label className="label">
                                             <p className="label-text text-[16px]">Password<span className='text-[#E33D5F]'>*</span></p>
                                        </label>
                                        <input type="text" className="input w-full " /> <hr />
                                   </div>
                                   <div className='mt-10 w-3/4'>
                                        <button className=" bg-[#00C38B] w-full py-5 rounded-lg text-white ">Sing up</button>
                                   </div>
                              </form>
                              <div className='mt-16 ml-10 text-left'>
                                   <p className='font-[14px] text-[#BDBDBD]'> By singin up, you agree to our Terms of service. </p>
                                   <p className='font-[14px] text-[#BDBDBD]'>Already have an accoutn? <span className='text-[#00C38B] text[14px] font-semibold underline'> <a href=" "> Log in</a> </span> </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;