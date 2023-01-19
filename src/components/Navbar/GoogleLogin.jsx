import { signInWithPopup } from "firebase/auth";
import React from "react";
import { toast } from "react-hot-toast";
import { saveUserToDB } from "../../api/saveUserToDB";
import { auth, googleAuthProvider } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();

  // user login with google
  const handleUserGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        toast.success("Successfully logged in!");
        // console.log(result.user)
        saveUserToDB(result.user.displayName, result.user.email)
          .then((data) => {
            console.log(data);
            return navigate("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      onClick={handleUserGoogleLogin}
      className="btn btn-primary text-white"
    >
      Continue With google
    </button>
  );
};

export default GoogleLogin;
