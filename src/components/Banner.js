import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
// add and check now
const Banner = () => {
  return (

    <div className=" text-center ">
      <section
        class="relative bg-[url(https://i.postimg.cc/DZBbLnKy/web-developer-web-development-programmer-programming.webp)] bg-cover bg-center bg-no-repeat"
      >
        <div
          class="absolute inset-0 bg-black/95 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/80 sm:to-black/25"
        ></div>

        <div
          class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div class="max-w-xl mx-auto text-white text-center ">
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
            <p class="mt-8 max-w-xl sm:text-lg sm:leading-relaxed ">
              A global leader in survey software. 20 million questions answered daily. Join more than 17 million active users worldwide
            </p>
              <div>
                <Link to="/login">
                  <button className="btn btn:md btn-success rounded-none my-5 ">
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
