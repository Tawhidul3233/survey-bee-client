import axios from "axios";

// save user to db
export const saveUserToDB = async (userName, email) => {
  try {
    const user = { userName, email };
    const data = await axios.put("https://survey-bee-server.vercel.app/users", user);
    return data;
    
  } catch (error) {
    console.log(error);
  }
};