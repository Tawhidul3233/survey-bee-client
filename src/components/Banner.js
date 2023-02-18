import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { user } from "../features/userSlice";
// add and check now
const Banner = () => {

  const activeUser = useSelector(user);
  console.log("I am from banner", activeUser);

  return (

    <div className=" text-center ">
      <section
        className="relative bg-[url(https://i.postimg.cc/Gp51zW7K/istockphoto-1133382677-170667a.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-black/25 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-black/50"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center sm:text-left text-white">
            <div>
              <TypeAnimation
                sequence={[
                  "Do people like attending my events? ",
                  1000,
                  "Will my product be a success or a flop?",
                  1000,
                  "Are my customers actually satisfied?",
                  1000,
                  "Are my employees happy at work?",
                  1000,
                ]}
                //  Replacing previous Text
                style={{ fontSize: "32px", fontWeight: 600 }}
                wrapper="h3"
                repeat={Infinity}
              />
            </div>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              A global leader in survey software. 20 million questions answered daily. Join more than 17 million active users worldwide
            </p>
            <div>
              <Link to={`${activeUser?.user ? "/plans-pricing" : "/login"}`}>
                <button className="btn btn:md btn-success rounded my-5">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
