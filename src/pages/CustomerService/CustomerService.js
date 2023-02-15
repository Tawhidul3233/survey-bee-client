import React from 'react';
import { Link } from 'react-router-dom';
import {GoMailRead} from "react-icons/go";
import {BsFillTelephoneForwardFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
import {FaTelegramPlane} from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const CustomerService = () => {

  const form = useRef();

    const handleSendEmail = (event) => {
       event.preventDefault()
       
       emailjs.sendForm('service_oy1i7u8', 'template_8cpnwll', form.current, 'B7VsHGVADS5nXFBtY')
       .then((result) => {
          console.log(result.text);
          toast.success('Thank you for taking the time to provide us with your valuable feedback.')
        },(error) => {
          console.log(error.text);
       });
       form.current.reset();
    }

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

      <div className='py-10 '>

        <h1 className='text-xl font-semibold text-center py-8'>Please take a moment to share your thoughts and opinions with us. Your feedback is important <br/>in helping us improve our services and better meet your needs.</h1>
        <div className='text-white banner' id='contact' style={{ backgroundImage: `url("https://i.ibb.co/3CBf0fM/contact.jpg")`}}>
            <h1 className='text-center text-3xl font-bold py-10'>Please write your Feedback here</h1>
            
            <div className='py-12'>
             <div className="hero lg:w-4/5 w-full mx-auto">
              <div className="flex flex-col items-start lg:gap-x-40 lg:flex-row-reverse">
               <form ref={form} onSubmit={handleSendEmail} className="card-body justify-items-center p-0">
                <div className="form-control mb-2"> 
                  <input name='name' type="text" placeholder="Name" className="input input-bordered bg-transparent border-white lg:w-96 w-full border" required/>
                </div>
                <div className="form-control mb-2"> 
                  <input name='email' type="email" placeholder="Email" className="input input-bordered bg-transparent border-white border" required/> 
                </div> 
                <div className='form-control mb-2'>
                 <textarea name='message' className="textarea textarea-bordered bg-transparent border-white border" placeholder="Your Feedback" required></textarea>
                </div>
                <div className="form-control mt-6">
                 <button type='submit' className="btn border-none bg-[#00b894] text-white"><FaTelegramPlane className='mr-2' /><span>Send Feedback</span></button>
                </div>
               </form>
               <div className='flex flex-col pt-4 text-white'>
                 
                 <h1 className='text-3xl flex items-center my-3'><GoMailRead className='mr-3' /> <span className='text-xl font-medium'>codewithhope606@gmail.com</span></h1>
                 <h1 className='text-3xl flex items-center my-3'><BsFillTelephoneForwardFill className='mr-3'/> <span className='text-xl font-medium'>+880199999999</span></h1>
                 <h1 className='text-3xl flex items-center my-3'><MdLocationOn className='mr-3'/> <span className='text-xl font-medium'>Dhaka, Bangladesh</span></h1>
               </div>
              </div>
             </div>
            </div> 
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