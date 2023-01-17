import React from "react";
import Banner from "../../components/Banner";
import MainContainer from "../../components/ExpertWrittenTemplate/MainContainer";
import Faq from "../../components/Faq";
import ImageSection from "../../components/ImageSection/ImageSection";
import SurveyAudience from "../../components/SurveyAudience/SurveyAudience";

const Home = () => {
  return (
    <div>
      <Banner> </Banner>
      <SurveyAudience />
      <ImageSection />
      <MainContainer />
      <Faq></Faq>
    </div>
  );
};

export default Home;
