import React from 'react';
import './ImageSection.css';

const ImageSection = () => {
    return (
        <div className='mb-8'>
            <div className="hero banner" style={{ backgroundImage: `url("https://i.ibb.co/YPJZwF3/SL-112119-25250-41.jpg")` }}>
  
  <div className="text-center">
    <div className="py-24">
      
      <div className='mb-5'>
      <h4 className="text-2xl font-bold text-white mb-2">Looking for targeted responses to your surveys?
      
      </h4>
      <h5 className='text-xl semi-bold text-white'>
      Get the responses you need in minutes with SurveyMonkey Audience, our trusted<br/>
      panel of more than 175 million respondents from across the globe.
      </h5>
      </div>
      <button className="btn bg-white btn-primary text-black">Learn More</button>
    </div>
  </div>
</div>
        </div>

    );
};

export default ImageSection;