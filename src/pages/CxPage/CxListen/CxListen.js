import React from 'react';

const CxListen = () => {
     return (
          <div>
               <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 my-10">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24 lg:order-last">
                         <div className="mx-auto max-w-xl  sm:text-left">
                              <h2 className=" text-lg sm:text-2xl font-bold text-gray-900 md:text-3xl">
                                   Listen to your customers wherever they are
                              </h2>

                              <p className="text-base text-gray-500 md:mt-4 md:block">
                                   Your customers interact with you across different channels, so meet them where they are. Use GetFeedback to:
                              </p>
                              <ul className='list-disc my-5'>
                                   <li>
                                        Automate feedback collection at key touchpoints throughout the customer journey
                                   </li>
                                   <li>
                                        Collect in-the-moment feedback across all channels, including website, email, SMS, and mobile apps
                                   </li>
                                   <li>
                                        Easily analyze omnichannel feedback in one place to see your holistic customer experience
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className=''>
                         <img
                              alt="Student"
                              src="https://i.ibb.co/Bt6Fd0j/cx-homepage-split2.png"
                              className="h-56 w-full object-cover sm:h-full"
                         />
                    </div>

               </section>
               <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                         <div className="mx-auto max-w-xl  sm:text-left">
                              <h2 className=" text-lg sm:text-2xl font-bold text-gray-900 md:text-3xl">
                                   Empower teams to quickly act on feedback
                              </h2>

                              <p className="text-base text-gray-500 md:mt-4 md:block">
                                   It takes a village to deliver great customer experiences. Use GetFeedback to:
                              </p>
                              <ul className='list-disc my-5'>
                                   <li>
                                        Drive actions in the systems your teams already use to get their work done, including Salesforce, Slack, and Jira
                                   </li>
                                   <li>
                                        Easily share insights such as trends, sentiment, and key drivers across your organization
                                   </li>
                                   <li>
                                        Understand customers more deeply by unifying CX data with CRM data, including Salesforce
                                   </li>
                              </ul>
                         </div>
                    </div>

                    <img
                         alt="Student"
                         src="https://i.ibb.co/Jzmx7nR/cx-homepage-split3-v2.png"
                         className="h-56 w-full object-cover sm:h-full"
                    />
               </section>
          </div>
     );
};

export default CxListen;