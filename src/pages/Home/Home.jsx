

import React from 'react';
import Banner from '../../components/Banner';
import ImageSection from '../../components/ImageSection/ImageSection';
import SurveyAudience from './SurveyAudience/SurveyAudience';




const Home = () => {
  return (
    <div>
      <Banner> </Banner>
      <SurveyAudience></SurveyAudience>
      <ImageSection/>
    </div>
  );
};

export default Home;