import React from 'react';

const CreateGreat = () => {
     return (
          <div>
               <section className='bg-[#05467e]'>
                    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                         <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                              <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                   <img
                                        alt="Party"
                                        src="https://i.ibb.co/12b6ZKB/cx-homepage-video-v3.png"
                                        class="absolute inset-0 h-full w-full object-cover"
                                   />
                              </div>

                              <div class="lg:py-16">
                                   <article class="space-y-4 text-gray-600">
                                        <h2 className=' w-full md:w-3/5 text-white text-3xl font-bold'>
                                             Create great customer experiences, fast
                                        </h2>

                                        <p className=' text-white w-full md:w-3/5'>
                                             See how GetFeedback helps your team quickly deliver winning experiences.
                                        </p>
                                   </article>
                              </div>
                         </div>
                    </div>
               </section>

          </div>
     );
};

export default CreateGreat;