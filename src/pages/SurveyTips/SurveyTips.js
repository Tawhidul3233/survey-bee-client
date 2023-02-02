import React from 'react';
import { Link } from 'react-router-dom';
import ImageSection from '../../components/ImageSection/ImageSection';

const SurveyTips = () => {
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
  
    
    <div className='py-10'>
      <h1 className="text-4xl font-semibold">Question-writing flow chart:<br/>
      Find out which question type<br/>
      is right for your survey
      </h1>
    
      
    </div>
    <img src="https://i.ibb.co/8zvtqpQ/question-type-right-for-you.png" alt='person' className="lg:w-1/3 rounded-md" />
  </div>
  
</div>
{/* Another Section */}
<div className='py-10'>
    <h3 className='text-success font-semibold text-3xl text-center'>What question format should you use? <br/>Answer: It depends.</h3>
    <p className='py-8 text-center text-xl'>To complicate matters, you have several question types to choose from. Options range from multiple-answer multiple choice questions to rating scale questions. But don't get overwhelmed; our “Question-type flow chart” will help you land on the right question format.</p>
  </div>
       <div>
       <ImageSection/>
       </div>
        <div className='py-16 text-2xl text-center font-semibold'>
            <h2>We're designing a new homepage experience and would love to learn what features would be most helpful to you. Please take 3 minutes to share your thoughts and shape the future of this page.</h2>
        </div>

        <div className='py-16 bg-blue-500'>
            <div className='py-8'>
            <h2 className='text-center text-white text-4xl'>Ready to send your own surveys?</h2>
            <div className='text-center pt-8'>
            <Link to='/dashboard/createasurvey'>
            <button className='btn btn-success normal-case'>
                Create Survey
            </button>
            </Link>
            </div>
            </div>
        </div>

        </div>
    );
};

export default SurveyTips;