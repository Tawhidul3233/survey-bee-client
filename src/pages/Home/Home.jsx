import React from "react";
import Banner from "../../components/Banner";
import MainContainer from "../../components/ExpertWrittenTemplate/MainContainer";
import Faq from "../../components/Faq";
import ImageSection from "../../components/ImageSection/ImageSection";
import Subscription from "../../components/Subscription/Subscription";
import SurveyAudience from "../../components/SurveyAudience/SurveyAudience";

const Home = () => {
  return (
    <div>
      <Banner />
      <SurveyAudience />
      <Subscription />
      <ImageSection />
      <MainContainer />
      <Faq />
    </div>
  );
};

export default Home;
