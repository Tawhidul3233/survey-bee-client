import axios from "axios";

const getUserAllSurveys = async (email) => {
  // http://localhost:5000/userCreatedSurveyQuestions?email=try@try.com
  try {
    if (email) {
      const response = await axios.get(
        `https://survey-bee-server.vercel.app/userCreatedSurveyQuestions?email=${email}`
      );
      return response?.data?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUserAllSurveys;
