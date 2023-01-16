import axios from "axios";

// save user to db
export const saveUserToDB = async (userName, email) => {
  try {
    const user = { userName, email };
    const data = await axios.put("http://localhost:5000/users", user);
    return data;
    
  } catch (error) {
    console.log(error);
  }
};