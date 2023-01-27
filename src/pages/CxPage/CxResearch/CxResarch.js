import React from 'react';

const CxResarch = () => {
     return (
          <div className='my-5 mx-5'>

               <article className="rounded-xl border-2 border-gray-100 bg-white">
                    <div className="sm:flex items-start p-6">
                         <a href=" " class="block shrink-0">
                              <img
                                   alt="Speaker"
                                   src="https://i.ibb.co/MDsmnH5/cx-homepage-reportcta.png"
                                   className="w-40  rounded-lg object-cover"
                              />
                         </a>

                         <div className="flex my-auto">
                              <div>
                                   <h3 className="font-medium sm:text-lg">
                                        <a href=" " className="hover:underline text-3xl font-semibold ">
                                             CX research: Agility and collaboration are key to success in 2021
                                        </a>
                                   </h3>
                                   <p>
                                        “GetFeedback empowers us to easily measure our customer experience and identify key drivers behind customer satisfaction. With GetFeedback, we uncovered a need to enhance our chatbot experience and by acting on this feedback, we’ve seen an incredible 14% lift in chat customer satisfaction.”
                                   </p>
                              </div>
                         </div>
                    </div>


               </article>


          </div>
     );
};

export default CxResarch;