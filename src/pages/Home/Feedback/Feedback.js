import React from 'react';

import FeedbackDetails from './FeedbackDetails';
const Feedback = () => {

    const feedbacks=[
        {
            _id:1,
            des:'Get a platform that can grow and it change along with it your survey needs over time. Browse our plans to learn more about specific features.',
            img:'https://i.ibb.co/C98vCj7/Symbol-1.png',
            title:'Momentive Solutions',
            btn:'Visit Momentive'
        },
        {
            _id:2,
            des:'Manage your company data with advanced security and control, so you can enable your teams to share and collaborate safely.',
            img:'https://i.ibb.co/Wv355Pj/Symbol-2.png',
            title:'Get Feedback',
            btn:'Visit GetFeedback'
        }
    ]

    return (
        <div className='py-12'>
            <div>
                <h2 className='text-center text-2xl font-bold'>Go beyond collecting feedback—deliver better <br/>
                experiences that drive your business
                </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1
            mt-10'>
                {
                    feedbacks.map(feedback=><FeedbackDetails feedback={feedback} key={feedback._id}>

                    </FeedbackDetails>)
                }
            </div>
        </div>
    );
};

export default Feedback;