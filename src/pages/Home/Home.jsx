
import React from 'react';
import Banner from '../../components/Banner';
import Faq from '../../components/Faq';
import ImageSection from '../../components/ImageSection/ImageSection';
import Subscription from '../../components/Subscription/Subscription';
import SurveyAudience from './SurveyAudience/SurveyAudience';



const Home = () => {
  return (
    <div>
      <Banner> </Banner>
      <SurveyAudience />
      <Subscription></Subscription>
      <ImageSection/>
      <Faq/>
    </div>
  );
};

export default Home;
