import React from 'react';
import { Link } from 'react-router-dom';

const CustomerService = () => {
    return (
        
            <div className='bg-base-200'>
              <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
  
    
    <div className='py-10'>
      <h1 className="text-5xl font-semibold">Design an excellent<br/>
      customer support<br/>
      experience
      </h1>
      <p className="py-6 text-xl">Get tools to help you pivot when the needs of your customers or <br/> your team change.</p>
      <Link to='/dashboard/surveyTips'><button className="btn bg-white btn-success text-black normal-case">Get Started</button></Link>
    </div>
    <img src="https://i.ibb.co/KsJMRG7/student-2.png" alt='person' className="lg:w-1/3 rounded-md" />
  </div>
</div>
       <div className='py-8'>
        <h2 className='text-lg font-semibold text-center'>It's not easy to always meet the expectations of your customers. Feedback not only helps you support your customers, it can also ensure your entire team is equipped to do so. The resources within this Customer Support Toolkit will help you answer your burning questions.</h2>
       </div>

       <div className='grid lg:grid-cols-2 sm:grid-cols-1 py-16'>
        <div className='mx-auto py-12'>
          
          
          <h2 className='font-semibold text-xl text-justify pt-4'>How do we provide a better customer experience?</h2>
         
          
         
          <ul className="list-disc py-8 ml-10">
            <li className='mb-2'>What processes can we automate?</li>
            <li className='mb-2'>How do I keep everyone bought in?</li>
            <li className='mb-2'>What are ways we can avoid monotony?</li>
            <li className=''>How do we balance the needs of the business <br/>with that of the team?</li>
          </ul>
        </div>

        <div>
        <div className='mx-auto bg-blue-500 py-12 px-16 text-white'>
          
          
          <h2 className='font-semibold text-xl text-justify pt-4'>How can I ensure my team doesn't burn out?</h2>
         
          
         
          <ul className="list-disc py-8 mx-10">
            <li className='mb-2'>Did we help the customer solve their problem?</li>
            <li className='mb-2'>Could we have responded faster?</li>
            <li className='mb-2'>Does the customer have all the resources they need?</li>
            <li className=''>How can we help customers reach their <br/>outcomes without solving one-off problems?</li>
          </ul>
        </div>
        </div>
       </div>
       

       {/*end of page*/}
            </div>

    );
};

export default CustomerService;