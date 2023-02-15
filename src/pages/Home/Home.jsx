import React from "react";
import Banner from "../../components/Banner";
import MainContainer from "../../components/ExpertWrittenTemplate/MainContainer";
import Faq from "../../components/Faq";
import ImageSection from "../../components/ImageSection/ImageSection";
import Chatbot from "../../components/LiveSupport/Chatbot";
import Subscription from "../../components/Subscription/Subscription";
import SurveyAudience from "../../components/SurveyAudience/SurveyAudience";
import Contact from "./Contact/Contact";
import Feedback from "./Feedback/Feedback";

import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <SurveyAudience />
      <Subscription />
      <ImageSection />
      <MainContainer />
      <Testimonial />
      <Feedback />
      <Faq />
      <Contact />
      <Chatbot />

    </div>
  );
};

export default Home;
