import React from 'react';

const FeedbackCx = () => {
     const data = [
          {
               id:1,
               icon:'https://i.ibb.co/Fq26j1k/cx-homepage-icon1-v2.png',
               title:'GetFeedback resource center',
               details:'Get pro CX tips, videos, and guides.'
          },
          {
               id:2,
               icon:'https://i.ibb.co/C2GdPSH/cx-homepage-icon2-v2.png',
               title:'About GetFeedback',
               details:'Learn about who we are.'
          },
          {
               id:3,
               icon:'https://i.ibb.co/dKsrvHn/cx-homepage-icon3-v2.png',
               title:'Why GetFeedback',
               details:'See what we can do for your business.'
          }
     ]
     return (
          <div className='bg-black my-5 text-white'>
               <div className=' text-center py-5'>
                    <h2 className='text-2xl font-semibold my-5'>We’re here to simplify CX</h2>
                    <p> B2B and B2C companies around the world trust GetFeedback to help deliver great customer experiences.</p>
               </div>
               <div className=' grid md:grid-cols-3 sm:grid-cols-2 gap-4 mb-6 pb-10 mx-5'>
                    {
                         data.map(d => <div key={d.id}>
                              <div className='bg-white text-black text-center rounded '>
                                   <div className=''>
                                        <img className=' mx-auto py-5' src={d.icon} alt="" />
                                   </div>
                                   <div className='my-3 font-semibold text-xl'>
                                        {d.title}
                                   </div>
                                   <div className=' '>
                                        {d.details}
                                   </div>
                                   <div>
                                        <button className='btn btn-sm btn-outline my-5'>Go Explore</button>
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default FeedbackCx;