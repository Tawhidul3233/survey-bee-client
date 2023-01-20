import React from 'react';

const Programs = () => {
     return (
          <div className='mx-2 my-10'>
               <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='grid sm:grid-cols-3  '>
                         <div className='bg-yellow-600 sm:col-span-1 grid items-center'>
                              <img src="https://i.ibb.co/VLDLw2y/Summit-Foundation-3-540x241.png" alt="" />
                         </div>
                         <div className='grid sm:col-span-2 text-center'>
                              <p className=' text-center w-5/6 mx-auto my-5'> Our scholarship application process used to be really cumbersome, but with SurveyMonkey Apply, it's incredibly simple for applicants and reviewers, and our staff has saved a ton of time.</p>
                              <p className='my-2'> Program Officer, The Summit Foundation </p>
                              <h2 className='mt-2 mb-5 text-yellow-600 font-semibold text-lg'>Megan Nuttelman</h2>
                         </div>
                    </div>
                    <div className='grid sm:grid-cols-3  '>
                         <div className='bg-red-800 sm:col-span-1 grid items-center'>
                              <img src="https://i.ibb.co/J5VZhGD/Universityof-Ottawa-1-540x241.png" alt="" />
                         </div>
                         <div className='grid sm:col-span-2 text-center'>
                              <p className=' text-center w-5/6 mx-auto my-5'> With SurveyMonkey Apply in place, applications have skyrocketed. The volume of completed scholarship applications increased by 220%, and we were able to utilize more funds than ever before.</p>
                              <p className='my-2'> Director of Financial Aid and Awards, University of Ottawa</p>
                              <h2 className='mt-2 mb-5 text-red-800 font-semibold text-lg'>Normand Séguin</h2>
                         </div>
                    </div>
               </div>
               <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='grid sm:grid-cols-3  '>
                         <div className='grid sm:col-span-2 text-center order-last sm:order-first'>
                              <p className=' text-center w-5/6 mx-auto my-5 '> We've improved our application and nomination experience, reduced administrative workloads, and created a faster, more efficient review process for all of our programs.</p>
                              <p className='my-2'> Associate Executive Director, UMass Amherst Alumni Association </p>
                              <h2 className='mt-2 mb-5 text-green-600 font-semibold text-lg'>Deb Goodhind</h2>
                         </div>
                         <div className='bg-green-600 sm:col-span-1 grid items-center '>
                              <img src="https://i.ibb.co/tZ9Pf5k/UMass-Amherst-Alumni-Assc-540x241.png" alt="" />
                         </div>

                    </div>
                    <div className='grid sm:grid-cols-3  '>
                         <div className='grid sm:col-span-2 text-center order-last sm:order-first'>
                              <p className=' text-center w-5/6 mx-auto my-5 '>SurveyMonkey Apply made it easy to collect thousands of applications and manage our entire review process. We wouldn’t have been able to facilitate the Community Fund for Canada’s 150th Grant Program without it.</p>
                              <p className='my-2'> Community Foundations of Canada</p>
                              <h2 className='mt-2 mb-5 text-red-800 font-semibold text-lg'>Laurel Carlton</h2>
                         </div>
                         <div className='bg-red-800 sm:col-span-1 grid items-center '>
                              <img src="https://i.ibb.co/yd1F7HH/CFC-540x241.png" alt="" />
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default Programs;