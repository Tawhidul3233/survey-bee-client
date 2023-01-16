import React from 'react';
import Banner from '../../components/Banner';
import Faq from '../../components/Faq';
import ImageSection from '../../components/ImageSection/ImageSection';
import Subscription from '../../components/Subscription/Subscription';
import Feedback from './Feedback/Feedback';
import SurveyAudience from './SurveyAudience/SurveyAudience';
import Testimonial from './Testimonial/Testimonial';



const Home = () => {
  
  return (
    <div>
      <Banner />
      <SurveyAudience />
      <Subscription />
      <ImageSection/>
      
      <Faq/>
      <Testimonial/>
      <Feedback/>
    </div>
  );
};

export default Home;
