import React from "react";
import { auth } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { saveUserToDB } from "../../../api/saveUserToDB";
import GoogleLogin from "../../../components/Navbar/GoogleLogin";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // create user with email and password
  const handleUserRegister = (data) => {
    // console.log(data);
    createUserWithEmailAndPassword(auth, data?.email, data?.password)
      .then((result) => {
        toast.success("successfully registered!");
        // console.log(result.user);
        const userInfo = {
          displayName: data.fullname,
        };

        // update user name
        updateProfile(auth.currentUser, userInfo)
          .then(() => {
            saveUserToDB(data?.fullname, data?.email)
              .then(() => {})
              .catch((err) => console.log(err));
          })
          .catch((err) => {
            console.log(err);
          });
        return navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className=" md:w-4/5 w-5/6 mx-auto mt-10 rounded-3xl grid md:grid-cols-5  border shadow-md my-10">
        <div className=" col-span-2 bg-[#00C38B] rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl ">
          <div className="">
            <img
              className="mt-5 mx-5  w-16 md:w-40 "
              src="https://i.ibb.co/1X6nFpH/survey-bee-removebg-preview.png"
              alt=""
            />
            <p className=" font-semibold text-2xl my-2 md:my-5 mx-5 text-white ">
              {" "}
              SurveyBee{" "}
            </p>
          </div>
          <div className=" d-none mx-5 ">
            <p className=" w-5/6 mb-3 text-xs md:text-base text-left text-[#F9E2BA]">
              {" "}
              SurveyMonkey operates on a freemium business model. This means we
              allow users to use our most basic tools for free, while
              designating our more advanced features and resources to our paid
              plans.
            </p>
          </div>
        </div>

        <div className=" col-span-3">
          <div>
            <div className="mt-4 ml-10 w-2/3">
              <p className=" font-semibold text-left">
                {" "}
                Let's started <br /> with a silmple few steps
              </p>
            </div>
            <form
              className=" mt-5 ml-10"
              onSubmit={handleSubmit(handleUserRegister)}
            >
              <div className="form-control w-5/6 md:w-3/4 ">
                <label className="label">
                  <p className="label-text ">
                    Email<span className="text-[#E33D5F]">*</span>
                  </p>
                </label>
                <input
                  {...register("email")}
                  type="text"
                  className="input w-full "
                />{" "}
                <hr />
              </div>
              <div className="form-control w-5/6 md:w-3/4 ">
                <label className="label">
                  <p className="label-text ">
                    Full name<span className="text-[#E33D5F]">*</span>
                  </p>
                </label>
                <input
                  {...register("fullname")}
                  type="text"
                  className="input w-full "
                />{" "}
                <hr />
              </div>
              <div className="form-control w-5/6 md:w-3/4 ">
                <label className="label">
                  <p className="label-text ">
                    Password<span className="text-[#E33D5F]">*</span>
                  </p>
                </label>
                <input
                  {...register("password")}
                  type="text"
                  className="input w-full "
                />{" "}
                <hr />
              </div>
              <div className="mt-5 w-5/6 md:w-3/4">
                <button className=" bg-[#00C38B] w-full py-5 rounded-lg text-white ">
                  Sing up
                </button>
              </div>
            </form>
            <div className="my-5 ml-10 text-left">
              <p className="font-[14px] text-[#BDBDBD]">
                {" "}
                By singin up, you agree to our Terms of service.{" "}
              </p>
              <p className="font-[14px] text-[#BDBDBD]">
                Already have an accoutn?{" "}
                <span className="text-[#00C38B] text[14px] font-semibold underline">
                  {" "}
                  <a href=" "> Log in</a>{" "}
                </span>{" "}
              </p>
            </div>
            <div className="my-5 ml-10">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
