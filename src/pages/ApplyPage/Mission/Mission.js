import React from 'react';

const Mission = () => {
     return (
          <div className='mt-16'>
               <div>
                    <h1 className='text-center text-2xl sm:text-3xl font-bold my-10'>More mission, less process</h1>
               </div>
               <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                         <div className="mx-auto max-w-xl text-center sm:text-left">
                              <h2 className=" text-lg sm:text-2xl font-bold text-gray-900 md:text-3xl">
                                   Seamlessly collect and review applications
                              </h2>

                              <p className=" text-xs sm:text-base text-gray-500 md:mt-4 md:block">
                                   Use branded, online portals to easily collect applications, coordinate reviews, and capture the feedback you need to make decisions and drive your mission forward. Create a process that's polished and painless.
                              </p>

                         </div>
                    </div>

                    <img
                         alt="Student"
                         src="https://i.ibb.co/LQTPk3F/homepage-illustration-2-1.png"
                         className="h-56 w-full object-cover sm:h-full"
                    />
               </section>
               <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 my-10">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24 lg:order-last">
                         <div className="mx-auto max-w-xl text-center sm:text-left">
                              <h2 className=" text-lg sm:text-2xl font-bold text-gray-900 md:text-3xl">
                                   Spend your time focusing on what matters most
                              </h2>

                              <p className="text-xs sm:text-base text-gray-500 md:mt-4 md:block">
                                   Integrate SurveyMonkey Apply into the way you work, automate the repetitive, time-consuming tasks in your application and review process, and free up your time for the things that matter most.
                              </p>

                         </div>
                    </div>
                    <div className=''>
                         <img
                              alt="Student"
                              src="https://i.ibb.co/mz3B26P/homepage-illustration-1-1.png"
                              className="h-56 w-full object-cover sm:h-full"
                         />
                    </div>

               </section>
               <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                         <div className="mx-auto max-w-xl text-center sm:text-left">
                              <h2 className=" text-lg sm:text-2xl font-bold text-gray-900 md:text-3xl">
                              Work with a true partner
                              </h2>

                              <p className=" text-xs sm:text-base text-gray-500 md:mt-4 md:block">
                              You’re passionate about your mission - the people you work with should be too. Our entire team, from engineering to support, is dedicated to your success. Take advantage of free onboarding, unlimited support, and helpful training resources.
                              </p>

                         </div>
                    </div>

                    <img
                         alt="Student"
                         src="https://i.ibb.co/f8rjnJP/homepage-illustration-3-1.png"
                         className="h-56 w-full object-cover sm:h-full"
                    />
               </section>


          </div>
     );
};

export default Mission;