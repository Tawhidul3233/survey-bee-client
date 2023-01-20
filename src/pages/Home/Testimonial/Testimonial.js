import React from 'react';

import Review from './Review';
const Testimonial = () => {

    const reviews=[
        {
            _id:1,
            designation:'Customer support',
            img:'https://i.ibb.co/KsJMRG7/student-2.png',
            
            des:'Provide better customer experiences while keeping your teams engaged.'
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
            des:'Build products that drive impact and offer a strong product-market fit.'
        },
        


]
    return (
        <div className='py-16'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold mb-3'>Tools that spark business breakthroughs</h2>
                <p>Discover specialized tool kits designed for your role and industry.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12'>
                {
                    reviews.map(review=><Review review={review} key={review._id}>

                    </Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;