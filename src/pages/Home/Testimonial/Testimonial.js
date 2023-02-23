import React from 'react';
import Lottie from 'lottie-react';
import Review from './Review';
import contact from './contact.json';
const Testimonial = () => {

    const reviews=[
        {
            _id:1,
            designation:'Customer support',
            img:'https://i.ibb.co/KsJMRG7/student-2.png',
            
            des:'Provide better customer support while keeping your teams engaged.'
        },
        {
            _id:2,
            designation:'Human resources',
            img:'https://i.ibb.co/my6VQ3c/student-4.png',
            
            des:'Retain your workforce by fostering a world-class employee experience.'
        },
        {
            _id:2,
            designation:'Product management',
            
            img:'https://i.ibb.co/R7D3DPK/people1.png',
            des:'Build products that impact and offer a strong product-market fit.'
        },
        


]
    return (
        <div className='py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center mb-5 lg:px-12'>
            
            <div>
                <Lottie animationData={contact} loop={true} className='lg:w-96 mx-auto'></Lottie>
                </div>
            
            <div>
                <h2 className='text-2xl font-bold mb-3 lg:text-start sm:text-center'>Tools that spark business breakthroughs</h2>
                <p className='text-start'>Our dedicated customer support team is available 24/7 to assist you with any questions or concerns you may have.At Survey Bee, we are committed to providing exceptional customer support that goes above and beyond your expectations.</p>


            </div>

                
            </div>

            <div className='grid gap-2 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 lg:px-20 justify-center items-center'>
                {
                    reviews.map(review=><Review review={review} key={review._id}>

                    </Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;