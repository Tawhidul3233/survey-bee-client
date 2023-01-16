import React from 'react';
import person1 from '../../../assets/images/review/student-2.png';
import person2 from '../../../assets/images/review/student-4.png';
import person3 from '../../../assets/images/review/people1.png';
import Review from './Review';
const Testimonial = () => {

    const reviews=[
        {
            _id:1,
            designation:'Customer support',
            img:person1,
            des:'Provide better customer experiences while keeping your teams engaged.'
        },
        {
            _id:2,
            designation:'Human resources',
            img:person2,
            des:'Retain your workforce by fostering a world-class employee experience.'
        },
        {
            _id:2,
            designation:'Product management',
            img:person3,
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