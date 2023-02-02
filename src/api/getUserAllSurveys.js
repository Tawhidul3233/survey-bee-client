import axios from "axios";

const getUserAllSurveys = async (email) => {
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
