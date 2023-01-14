import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";
import { user } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { setUserLogOutState } from "../features/userSlice";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isEmailOpen, setEmailOpen] = useState(false);
  const dispatch = useDispatch();

  const activeUser = useSelector(user);
  // // console.log(useSelector(user));
  //   console.log(activeUser?.user)
  console.log(activeUser);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogOutState());
        toast.success("successfully logged out!", {
          style: {
            borderRadius: "6px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* {userLoading ? (
        <p>Loading...</p>
      ) : ( */}
      <div
        className={`navbar ${
          activeUser?.user?.email ? "bg-gray-800" : "bg-base-100 text-black"
        } lg:px-16 shadow-md sticky top-0 z-50 lg:pt-4`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              // tabIndex={0}
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <RxCross2 className="text-5xl" />
              ) : (
                <GiHamburgerMenu className="text-5xl" />
              )}
            </label>
            {/* <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          parent
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Plans & Pricing</a>
            </li>
          </ul> */}
          </div>
          <Link
            to="/"
            className="normal-case text-2xl font-semibold hidden md:hidden lg:flex items-center gap-x-1 text-primary"
          >
            <img
              src="https://i.ibb.co/1X6nFpH/survey-bee-removebg-preview.png"
              alt="logo"
              className="w-9 h-9"
            />
            <h3>SurveyBee</h3>
          </Link>
        </div>
        <div className="navbar-center lg:hidden">
          <Link
            to="/"
            className="normal-case text-3xl font-semibold flex items-center gap-x-1 text-primary"
          >
            <img
              src="https://i.ibb.co/1X6nFpH/survey-bee-removebg-preview.png"
              alt="logo"
              className="w-9 h-9"
            />
            <h3>SurveyBee</h3>
          </Link>
        </div>
        <div className="navbar-center hidden md:hidden lg:flex mx-auto">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <p
                onClick={() =>
                  setIsProductsOpen(
                    !isProductsOpen,
                    setIsSolutionOpen(false),
                    setIsResourcesOpen(false)
                  )
                }
                className={`${
                  activeUser?.user?.email ? "text-white" : "text-black"
                }`}
              >
                Products
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </p>
              {isProductsOpen && (
                <ul className="w-[70vw] fixed left-[15%] top-20 z-50 bg-[#FFFFFF] nav-subdiv-shadow">
                  <div
                    className=" flex justify-between flex-row
        border-0 rounded-none
        "
                  >
                    <div className="flex flex-col w-1/3 px-4 py-4">
                      <div className="border-b-[1px] border-gray-800 w-full mx-4">
                        <span>
                          <small>Surveys</small>
                        </span>
                      </div>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          SurveyBee
                        </span>
                        <span>
                          Create & send surveys with the world's leading online
                          survey software
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Enterprise
                        </span>
                        <span>
                          Empower your organization with our secure survey
                          platform
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Integrations & Plug-ins
                        </span>
                        <span>
                          Bring survey insights into your business apps
                        </span>
                      </Link>
                    </div>
                    <div className="flex flex-col w-1/3 px-4 py-4 bg-[#F7F7F7]">
                      <div className="border-b-[1px] border-gray-800 w-full mx-4">
                        <span>
                          <small>Specialized products</small>
                        </span>
                      </div>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Audience
                        </span>
                        <span>
                          Collect survey responses from our global consumer
                          panel
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          CX
                        </span>
                        <span>
                          Understand & improve customer experience (NPS®)
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Engage
                        </span>
                        <span>Understand & increase employee engagement</span>
                      </Link>
                    </div>
                    <div className="flex flex-col w-1/3 px-4 py-4 bg-[#F7F7F7]">
                      <div className="border-b-[1px] border-gray-800 w-full mx-4">
                        <span>
                          <small>Your State</small>
                        </span>
                      </div>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          TechValidate
                        </span>
                        <span>
                          Create marketing content from customer feedback
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Apply
                        </span>
                        <span>
                          Collect, review & manage applications online
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Wufoo
                        </span>
                        <span>Gather data & payments with online forms</span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          GetFeedback
                        </span>
                        <span>Customer feedback for Salesforce</span>
                      </Link>
                      <Link className="pl-24 py-2 flex items-center gap-x-1 text-secondary">
                        <span className="hover:underline">
                          View all products
                        </span>{" "}
                        <span className="">
                          <CgArrowLongRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </ul>
              )}
            </li>
            <li tabIndex={0}>
              <p
                onClick={() =>
                  setIsSolutionOpen(
                    !isSolutionOpen,
                    setIsProductsOpen(false),
                    setIsResourcesOpen(false)
                  )
                }
                className={`${
                  activeUser?.user?.email ? "text-white" : "text-black"
                }`}
              >
                Solutions
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </p>
              {isSolutionOpen && (
                <ul className="w-[70vw] fixed left-[15%] top-20 z-50 bg-[#FFFFFF] nav-subdiv-shadow">
                  <div
                    className=" flex justify-between flex-row
        border-0 rounded-none
        "
                  >
                    <div className="flex flex-col w-1/3 px-4 py-4 text-primary">
                      <div className="border-b-[1px] border-gray-800 w-full mx-4">
                        <span>
                          <small className="text-neutral">Survey Types</small>
                        </span>
                      </div>
                      <div
                        to="/"
                        className="px-4 py-4 rounded-sm flex flex-col"
                      >
                        <Link to="/" className="hover:underline">
                          Customer Satisfaction
                        </Link>
                        <Link to="/" className="hover:underline">
                          Customer Loyalty
                        </Link>
                        <Link to="/" className="hover:underline">
                          Event Surveys
                        </Link>
                      </div>
                      <div
                        to="/"
                        className="px-4 py-4 rounded-sm flex flex-col"
                      >
                        <Link to="/" className="hover:underline">
                          Employee Engagement
                        </Link>
                        <Link to="/" className="hover:underline">
                          Job Satisfaction
                        </Link>
                        <Link to="/" className="hover:underline">
                          HR Surveys
                        </Link>
                      </div>
                      <div
                        to="/"
                        className="px-4 py-4 rounded-sm flex flex-col"
                      >
                        <Link to="/" className="hover:underline">
                          Market Research
                        </Link>
                        <Link to="/" className="hover:underline">
                          Opinion Polls
                        </Link>
                        <Link to="/" className="hover:underline">
                          Concept Testing
                        </Link>
                      </div>
                      <Link className="px-4 pt-16 flex items-center gap-x-1 text-secondary">
                        <span className="hover:underline">
                          Explore more survey types
                        </span>
                        <span className="">
                          <CgArrowLongRight />
                        </span>
                      </Link>
                    </div>
                    <div className="flex flex-col w-1/3 px-4 py-4 bg-[#F7F7F7]">
                      <div className="border-b-[1px] border-gray-800 w-full mx-4">
                        <span>
                          <small>People Powered Data for business</small>
                        </span>
                      </div>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Customers
                        </span>
                        <span>
                          Win more business with Customer Powered Data
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Employees
                        </span>
                        <span>
                          Build a stronger workforce with Employee Powered Data
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Markets
                        </span>
                        <span>
                          Validate business strategy with Market Powered Data
                        </span>
                      </Link>
                    </div>
                    <div className="flex flex-col w-1/3 px-4 py-4 bg-[#F7F7F7]">
                      <div className="border-b-[1px] border-gray-800 w-full mx-4">
                        <span>
                          <small>Solutions for teams</small>
                        </span>
                      </div>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Customer Experience
                        </span>
                        <span>
                          Delight customers & increase loyalty through feedback
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Human Resources
                        </span>
                        <span>
                          Improve your employee experience, engagement &
                          retention
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Marketing
                        </span>
                        <span>
                          Create winning campaigns, boost ROI & drive growth
                        </span>
                      </Link>
                      <Link
                        to="/"
                        className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                      >
                        <span className="font-semibold text-xl text-secondary block">
                          Education
                        </span>
                        <span>
                          Elevate your student experience and become a
                          data-driven institution
                        </span>
                      </Link>
                    </div>
                  </div>
                </ul>
              )}
            </li>
            <li tabIndex={0}>
              <p
                onClick={() =>
                  setIsResourcesOpen(
                    !isResourcesOpen,
                    setIsProductsOpen(false),
                    setIsSolutionOpen(false)
                  )
                }
                className={`${
                  activeUser?.user?.email ? "text-white" : "text-black"
                }`}
              >
                Resources
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </p>
              {isResourcesOpen && (
                <>
                  <ul className="w-[70vw] fixed left-[15%] top-20 z-50 bg-[#FFFFFF] nav-subdiv-shadow">
                    <div
                      className=" flex justify-between flex-row
            border-0 rounded-none
            "
                    >
                      <div className="flex flex-col w-1/3 px-4 py-4">
                        <Link
                          to="/"
                          className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                        >
                          <span className="font-semibold text-xl text-secondary block">
                            Resources
                          </span>
                          <span>
                            Best practices for using surveys & survey data
                          </span>
                        </Link>
                      </div>
                      <div className="flex flex-col w-1/3 px-4 py-4">
                        <Link
                          to="/"
                          className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                        >
                          <span className="font-semibold text-xl text-secondary block">
                            Curiosity at Work
                          </span>
                          <span>
                            Our blog about surveys, tips for business, & more
                          </span>
                        </Link>
                      </div>
                      <div className="flex flex-col w-1/3 px-4 py-4">
                        <Link
                          to="/"
                          className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                        >
                          <span className="font-semibold text-xl text-secondary block">
                            Help Center
                          </span>
                          <span>
                            Tutorials & how-to guides for using SurveyMonkey
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="w-[95%] mx-auto h-[1px] bg-secondary"></div>
                    <Link className="pr-12 pt-4 pb-6 flex items-center justify-end gap-x-1 text-secondary">
                      <span className="hover:underline">
                        Explore our 180+ survey templates
                      </span>
                      <span className="">
                        <CgArrowLongRight />
                      </span>
                    </Link>
                  </ul>
                </>
              )}
            </li>
            <li>
              <Link
                to="/"
                className={`${
                  activeUser?.user?.email ? "text-white" : "text-black"
                }`}
              >
                Plans & Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-3 hidden md:flex h-full">
          {!activeUser?.user ? (
            <>
              {" "}
              <Link to="/login" className="text-xl text-black font-semibold">
                Log in
              </Link>
              <Link
                to="/register"
                className="btn btn-success normal-case lg:text-xl font-semibold"
              >
                Sign up free
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => setEmailOpen(!isEmailOpen)}
                className={`h-14 font-semibold hover:border-b-4 border-b-4 border-gray-800 hover:border-white text-white ${
                  isEmailOpen ? "border-white" : undefined
                }`}
              >
                {activeUser?.user?.email}
              </button>
              {isEmailOpen && (
                <ul className="w-60 fixed right-2 top-20 z-50 bg-gray-900 text-white py-4 rounded-sm shadow-sm border border-secondary">
                  <div>
                    <button
                      onClick={handleLogOut}
                      className="hover:bg-base-200 hover:text-black w-full text-left px-4 py-2"
                    >
                      Sign out
                    </button>
                  </div>
                </ul>
              )}
            </>
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Navbar;
