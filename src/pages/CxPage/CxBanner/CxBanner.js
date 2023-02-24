import React from 'react';

const CxBanner = () => {
     return (
          <div>
               <section className="bg-gray-900 text-white">
                    <div
                         className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                    >
                         <div className="mx-auto max-w-3xl text-center">
                              <h1
                                   className="bg-gradient-to-r from-green-200 via-green-500 to-green-900 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl"
                              >
                                   An agile CX platform that moves as quickly as your team does
                              </h1>

                              <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                                   Start fast and think big with GetFeedback’s unique blend of power and ease of use that your team will love.
                              </p>

                              <div className="mt-8 flex flex-wrap justify-center gap-4">


                                   <a
                                        className="block w-full rounded hover:border  px-12 py-3 text-sm font-medium text-black focus:outline-none focus:ring bg-yellow-600 hover:bg-transparent hover:text-white sm:w-auto"
                                        href="/about"
                                   >
                                        Request a demo
                                   </a>
                              </div>
                         </div>
                    </div>
               </section>

          </div>
     );
};

export default CxBanner;