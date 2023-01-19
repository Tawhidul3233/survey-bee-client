import React from "react";
import Banner from "../../components/Banner";
import MainContainer from "../../components/ExpertWrittenTemplate/MainContainer";
import Faq from "../../components/Faq";
import ImageSection from "../../components/ImageSection/ImageSection";
import Subscription from "../../components/Subscription/Subscription";
import SurveyAudience from "../../components/SurveyAudience/SurveyAudience";
// import Feedback from "./Feedback/Feedback";
// import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <SurveyAudience />
      <Subscription />
      <ImageSection />
      <MainContainer />
      {/* <Testimonial /> */}
      {/* <Feedback /> */}
      <Faq />
    </div>
  );
};

export default Home;
