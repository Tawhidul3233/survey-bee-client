import React from "react";
import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import ImageSection from "../../components/ImageSection/ImageSection";
import SurveyAudience from "./SurveyAudience/SurveyAudience";

const Home = () => {
  
  return (
    <div>
      <Banner> </Banner>
      <SurveyAudience />
      <ImageSection />
      <Faq />
    </div>
  );
};

export default Home;
