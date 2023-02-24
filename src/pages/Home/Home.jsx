import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import MainContainer from "../../components/ExpertWrittenTemplate/MainContainer";
import Faq from "../../components/Faq";
import ImageSection from "../../components/ImageSection/ImageSection";
import Chatbot from "../../components/LiveSupport/Chatbot";
import Subscription from "../../components/Subscription/Subscription";
import SurveyAudience from "../../components/SurveyAudience/SurveyAudience";
import Contact from "./Contact/Contact";
import Feedback from "./Feedback/Feedback";
import AOS from "aos";
import "aos/dist/aos.css";

import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <Banner />
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <SurveyAudience />
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Subscription />
      </div>
      <div>
        <ImageSection />
      </div>
      <div>
        <MainContainer />
      </div>
      <div>
        <Testimonial />
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Feedback />
      </div>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <Faq />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;
