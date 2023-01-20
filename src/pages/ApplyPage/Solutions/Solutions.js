import React from 'react';

const Solutions = () => {

     const data = [
          {
               icon: 'https://i.ibb.co/PrzVJkd/image.png ',
               title: 'Grants ',
               details: ' Spend less time on administration, and more on mission. Streamline your grant application and review.'
          },
          {
               icon: ' https://i.ibb.co/CVgpyyM/image.png',
               title: 'Scholarship ',
               details: 'Increase fund utilization and empower staff and students. Simplify scholarship applications and reviews.'
          },
          {
               icon: ' https://i.ibb.co/86gPZZ3/image.png',
               title: 'Fellowships  ',
               details: 'Spark innovation. Easily collect applications and make decisions on fellowship candidates.'
          },
          {
               icon: 'https://i.ibb.co/QH8Z8W7/image.png ',
               title: 'Program Admissions  ',
               details: 'Create a seamless application experience and make better, faster decisions on candidates.'
          }
     ]
     return (
          <div className='my-10'>
               <h2 className='text-center text-2xl sm:text-3xl font-bold my-10 pt-10'>
                    Meet our solutions
               </h2>
               <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 '>

                    {
                         data.map(d =>
                              <div className=' '>
                                   <div className='border'>
                                        <div className=' bg-[#05467e] py-5'>
                                             <div>
                                                  <img src={d.icon} alt="" />
                                             </div>
                                             <div className=' text-white font-semibold text-xl ml-5'>
                                                  {d.title}
                                             </div>
                                        </div>
                                        <div className='mb-10'>
                                             <p className='ml-5 my-4'>{d.details}</p>
                                             <a className='ml-5  text-[#05467e] font-semibold ' href=" "> Learn more</a>
                                        </div>
                                   </div>
                              </div>)
                    }
               </div>
          </div>
     );
};

export default Solutions;