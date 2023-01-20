import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
// add and check now
const Banner = () => {
  return (
    <div className=" text-center my-20">
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
          style={{ fontSize: "46px", fontWeight: 600 }}
          wrapper="h2"
          repeat={Infinity}
        />
      </div>
      <div>
        <p className="my-10">
          {" "}
          A global leader in survey software. 20 million questions answered
          daily.{" "}
        </p>
      </div>
      <div>
        <Link to="/login">
          <button className="btn btn:md btn-success rounded-none ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
