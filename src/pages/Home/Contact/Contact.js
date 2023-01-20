import React from 'react';
import {GoMailRead} from "react-icons/go";
import {BsFillTelephoneForwardFill} from "react-icons/bs";
import {MdLocationOn} from "react-icons/md";
import {FaTelegramPlane} from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => { 

    const form = useRef();

    const handleSendEmail = (event) => {
       event.preventDefault()
       
       emailjs.sendForm('service_b23f4pf', 'template_h6dcqro', form.current, 'M_ZpfpVp-QjxlUJBz')
       .then((result) => {
          console.log(result.text);
          toast.success('Message send')
        },(error) => {
          console.log(error.text);
       });
       form.current.reset();
    }

    return (
        <div id='contact' className='my-32 '>
            <h1 className='text-center text-4xl font-bold mb-16'>Contact US</h1>
            
            <div className='bg-blue-500 py-12'>
             <div className="hero lg:w-4/5 w-full mx-auto">
              <div className="flex flex-col items-start lg:gap-x-40 lg:flex-row-reverse">
               <form ref={form} onSubmit={handleSendEmail} className="card-body justify-items-center p-0">
                <div className="form-control"> 
                  <input name='name' type="text" placeholder="Name" className="input input-bordered lg:w-96 w-full border-2" />
                </div>
                <div className="form-control"> 
                  <input name='email' type="email" placeholder="Email" className="input input-bordered  border-2" /> 
                </div> 
                <div className='form-control'>
                 <textarea name='message' className="textarea textarea-bordered border-2" placeholder="Message"></textarea>
                </div>
                <div className="form-control mt-6">
                 <button type='submit' className="btn border-none btn-success text-white"><FaTelegramPlane className='mr-2' /><span>Send Message</span></button>
                </div>
               </form>
               <div className='flex flex-col pt-4'>
                 
                 <h1 className='text-3xl flex items-center my-3'><GoMailRead className='mr-3' /> <span className='text-xl font-medium'>codewithhope606@gmail.com</span></h1>
                 <h1 className='text-3xl flex items-center my-3'><BsFillTelephoneForwardFill className='mr-3'/> <span className='text-xl font-medium'>+880199999999</span></h1>
                 <h1 className='text-3xl flex items-center my-3'><MdLocationOn className='mr-3'/> <span className='text-xl font-medium'>Dhaka, Bangladesh</span></h1>
               </div>
              </div>
             </div>
            </div> 
        </div>
    )
}

export default Contact;