import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BuySurvey = () => {
  const survey = useLoaderData();
  console.log(survey)

  return (
    <div>
      <div className='w-[100%] md:w-[60%] mx-2 md:mx-5 my-5'>
        <div>
          <h2 className=' text-[14px] md:text-xl font-semibold'> Profile: {survey.email} </h2>
          <div className=' grid  grid-cols-2 my-2'>
            <div>
              <h2 className='text-xs sm:text-base'> Survey: {survey.surveyTitle}</h2>
              <p className='text-xs sm:text-base'> Catagory: {survey.surveyCategory}</p>
            </div>
            <div>
              <p className='text-xs sm:text-base'> Create: {survey.surveyModifiedTime}</p>
              <p className='text-xs sm:text-base'> Modified: {survey.surveyCreateTime}</p>
            </div>
          </div>
          <div>
            <p className='text-xs sm:text-base'> Description: {survey.surveyDescription.slice(0, 200)}...</p>
          </div>
        </div>
      </div>

      <div>




      </div>
    </div>
  );
};

export default BuySurvey;