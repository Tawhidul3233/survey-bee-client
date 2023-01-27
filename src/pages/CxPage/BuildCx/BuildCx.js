import React from 'react';

const BuildCx = () => {
     return (
          <div>
               <section className=''>
                    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                         <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                              <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                   <img
                                        alt="Party"
                                        src="https://i.ibb.co/7rH9zMK/cx-homepage-split1-v3.png"
                                        class="absolute inset-0 h-full w-full object-cover"
                                   />
                              </div>

                              <div class="lg:py-16">
                                   <article class="space-y-4 text-gray-600">
                                        <h2 className=' w-full md:w-4/5  text-3xl font-bold'>
                                             Build a CX program that adapts to customer needs
                                        </h2>

                                        <p className='  w-full md:w-3/5'>
                                             Quickly evolve your customer experience programs to meet changing customer needs. Use GetFeedback to:
                                        </p>
                                        <ul className='list-disc mx-3'>
                                             <li>
                                                  Accelerate the launch of your CX program, without an army of paid consultants
                                             </li>
                                             <li>
                                                  Leverage pre-built templates and reports, and easily customize them to meet your specific needs
                                             </li>
                                             <li>
                                                  Tap into best practices baked into the product to set up your team for success
                                             </li>
                                        </ul>
                                   </article>
                              </div>
                         </div>
                    </div>
               </section>

          </div>
     );
};

export default BuildCx;