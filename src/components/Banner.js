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
    <section>
      <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <img
              alt="Party"
              src="https://i.ibb.co/M8x9r86/ABES-graphic.png"
              className="absolute inset-0  object-cover"
            />
          </div>

          <div className="md:py-12 sm:-my-0 -my-16 text-center sm:text-left">
            <div>
              <TypeAnimation
                sequence={[
                  "People attending my events? ",
                  1000,
                  "Will my product be a success?",
                  1000,
                  "Are my customers satisfied?",
                  1000,
                  "Employees happy at work?",
                  1000,
                ]}
                //  Replacing previous Text
                style={{ fontSize: "22px", fontWeight: 600 }}
                wrapper="h3"
                repeat={Infinity}
              />
            </div>

            <p className="mt-4 max-w-lg text-base sm:text-xl sm:leading-relaxed">
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
      </div>
    </section>


  );
};

export default Banner;
