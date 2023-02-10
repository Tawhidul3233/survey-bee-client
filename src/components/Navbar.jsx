import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";
import { user } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { setUserLogOutState } from "../features/userSlice";
import { toast } from "react-hot-toast";
import AuthenticationButtons from "./Navbar/AuthenticationButtons";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isEmailOpen, setEmailOpen] = useState(false);
  const dispatch = useDispatch();

  // const { user: existingUser, userLoading } = activeUser;

  const activeUser = useSelector(user);
  // console.log(activeUser);
  const { user: existingUser } = activeUser;
  const [isAdmin, isAdminLoading] = useAdmin(existingUser?.email);


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
      <div
        className={`navbar ${activeUser?.user?.email ? "bg-gray-800" : "bg-base-100 text-black"
          } lg:px-16 shadow-md sticky top-0 z-50 lg:pt-4`}
      >
        <div className="navbar-start">
          {/* mobile view starts here*/}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <RxCross2
                  className={`${activeUser?.user?.email ? "text-base-100" : "text-black"
                    } text-5xl`}
                />
              ) : (
                <GiHamburgerMenu
                  className={`${activeUser?.user?.email ? "text-base-100" : "text-black"
                    } text-5xl`}
                />
              )}
            </label>
            <>
              {isOpen && (
                <>
                  <ul
                    tabIndex={0}
                    className={`menu menu-compact h-full dropdown-content overflow-y-auto bg-[#e0e5e5] mt-2 p-2 shadow w-screen md:w-[85vw] pt-3 transition ease-in-out duration-[20ms] min-h-screen ${isOpen ? "ml-[-8px]" : "ml-[-600px]"
                      }`}
                  >
                    <div className="flex flex-col">
                      <li className="rounded-sm w-full mx-0 px-0">
                        <div className="flex flex-col">
                          <p
                            onClick={() =>
                              setIsDashboardOpen(
                                !isDashboardOpen,
                                setIsSolutionOpen(false),
                                setIsResourcesOpen(false),
                                setIsProductsOpen(false)
                              )
                            }
                            className={`flex justify-between px-4 py-5 mb-0 hover:text-base-100 rounded-b-none w-full ${isOpen ? " hover:bg-[#808B91]" : undefined
                              }`}
                          >
                            <span className="font-semibold text-xl">
                              Dashboard
                            </span>
                            <span>
                              {isDashboardOpen ? (
                                <MdKeyboardArrowUp className="text-3xl" />
                              ) : (
                                <MdKeyboardArrowDown className="text-3xl" />
                              )}
                            </span>
                          </p>
                          {isDashboardOpen && isAdmin ?
                            <ul className="w-full z-50 bg-[#808B91] rounded-none text-base-100 mt-[-11px]">
                              <div
                                className=" flex justify-between flex-col
                            border-0 rounded-none
                            "
                              >
                                <div className="flex flex-col w-full px-4 py-2">
                                  <Link
                                    to="/dashboard/overview"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Overview
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-2">
                                  <Link
                                    to="/dashboard/manageusers"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Manage Users
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-2">
                                  <Link
                                    to="/setting"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Settings
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </ul> : isDashboardOpen &&
                            <ul className="w-full z-50 bg-[#808B91] rounded-none text-base-100 mt-[-11px]">
                              <div
                                className=" flex justify-between flex-col
                           border-0 rounded-none
                           "
                              >
                                <div className="flex flex-col w-full px-4 py-2">
                                  <Link
                                    to="/dashboard"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Dashboard
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-2">
                                  <Link
                                    to="/dashboard/mysurveys"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      My survey
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-2">
                                  <Link
                                    to="/setting"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Setting
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </ul>
                          }
                        </div>
                      </li>
                      <li className="rounded-sm w-full mx-0 px-0">
                        <div className="flex flex-col">
                          <p
                            onClick={() =>
                              setIsProductsOpen(
                                !isProductsOpen,
                                setIsSolutionOpen(false),
                                setIsResourcesOpen(false)
                              )
                            }
                            className={`flex justify-between px-4 py-5 mb-0 hover:text-base-100 rounded-b-none w-full ${isOpen ? " hover:bg-[#808B91]" : undefined
                              }`}
                          >
                            <span className="font-semibold text-xl">
                              Products
                            </span>
                            <span>
                              {isProductsOpen ? (
                                <MdKeyboardArrowUp className="text-3xl" />
                              ) : (
                                <MdKeyboardArrowDown className="text-3xl" />
                              )}
                            </span>
                          </p>
                          {isProductsOpen && (
                            // <ul className="w-[97%] fixed top-14 left-2 z-50 bg-[#808B91] rounded-none text-base-100">
                            <ul className="w-full z-50 bg-[#808B91] rounded-none text-base-100 mt-[-11px]">
                              <div
                                className=" flex justify-between flex-col
                            border-0 rounded-none
                            "
                              >
                                <div className="flex flex-col w-full px-4 py-2">
                                  <span className="w-full mx-3">
                                    <small>Surveys</small>
                                  </span>
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      SurveyBee
                                    </span>
                                    <span>
                                      Create & send surveys with the world's
                                      leading online survey software
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
                                      Empower your organization with our secure
                                      survey platform
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
                                      Bring survey insights into your business
                                      apps
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-2">
                                  <span className="w-full mx-3">
                                    <small>Specialized products</small>
                                  </span>
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Audience
                                    </span>
                                    <span>
                                      Collect survey responses from our global
                                      consumer panel
                                    </span>
                                  </Link>
                                  <Link
                                    to="/cx"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      CX
                                    </span>
                                    <span>
                                      Understand & improve customer experience
                                      (NPS®)
                                    </span>
                                  </Link>
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Engage
                                    </span>
                                    <span>
                                      Understand & increase employee engagement
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-2">
                                  <span className="w-full mx-3">
                                    <small>Yout State</small>
                                  </span>
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      TechValidate
                                    </span>
                                    <span>
                                      Create marketing content from customer
                                      feedback
                                    </span>
                                  </Link>
                                  <Link
                                    to="/apply"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Apply
                                    </span>
                                    <span>
                                      Collect, review & manage applications
                                      online
                                    </span>
                                  </Link>
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Wufoo
                                    </span>
                                    <span>
                                      Gather data & payments with online forms
                                    </span>
                                  </Link>
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      GetFeedback
                                    </span>
                                    <span>
                                      Customer feedback for Salesforce
                                    </span>
                                  </Link>
                                  <Link className="pl-24 py-2 flex items-center justify-end gap-x-1 text-primary">
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
                        </div>
                      </li>
                      <li className="rounded-sm w-full mx-0 px-0">
                        <div className="flex flex-col">
                          <p
                            onClick={() =>
                              setIsSolutionOpen(
                                !isSolutionOpen,
                                setIsProductsOpen(false),
                                setIsResourcesOpen(false)
                              )
                            }
                            className={`flex justify-between px-4 py-5 mb-0 hover:text-base-100 rounded-b-none w-full ${isOpen ? " hover:bg-[#808B91]" : undefined
                              }`}
                          >
                            <span className="font-semibold text-xl">
                              Solutions
                            </span>
                            <span>
                              {isSolutionOpen ? (
                                <MdKeyboardArrowUp className="text-3xl" />
                              ) : (
                                <MdKeyboardArrowDown className="text-3xl" />
                              )}
                            </span>
                          </p>
                          {isSolutionOpen && (
                            // <ul className="w-[97%] fixed top-14 left-2 z-50 bg-[#808B91] rounded-none text-base-100">
                            <ul className="w-full z-50 bg-[#808B91] rounded-none text-base-100 mt-[-11px]">
                              <div
                                className=" flex justify-between flex-col
                            border-0 rounded-none
                            "
                              >
                                <div className="flex flex-col w-full px-4 py-2">
                                  <div className="w-full mx-4">
                                    <span>
                                      <small>
                                        People Powered Data for business
                                      </small>
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
                                      Win more business with Customer Powered
                                      Data
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
                                      Build a stronger workforce with Employee
                                      Powered Data
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
                                      Validate business strategy with Market
                                      Powered Data
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-2">
                                  <div className="w-full mx-4">
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
                                      Delight customers & increase loyalty
                                      through feedback
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
                                      Improve your employee experience,
                                      engagement & retention
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
                                      Create winning campaigns, boost ROI &
                                      drive growth
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
                                      Elevate your student experience and become
                                      a data-driven institution
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-2">
                                  <div className="w-full mx-4">
                                    <span>
                                      <small className="text-base-100">
                                        Survey Types
                                      </small>
                                    </span>
                                  </div>
                                  <div className="px-4 py-4 rounded-sm flex flex-col text-primary gap-y-4">
                                    <Link to="/" className="hover:underline">
                                      Customer Satisfaction
                                    </Link>
                                    <Link to="/" className="hover:underline">
                                      Customer Loyalty
                                    </Link>
                                    <Link to="/" className="hover:underline">
                                      Event Surveys
                                    </Link>
                                    <Link to="/" className="hover:underline">
                                      Employee Engagement
                                    </Link>
                                    <Link to="/" className="hover:underline">
                                      Job Satisfaction
                                    </Link>
                                    <Link to="/" className="hover:underline">
                                      HR Surveys
                                    </Link>
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
                                  <Link className="pl-3 pt-4 flex items-center gap-x-1 text-secondary">
                                    <span className="hover:underline">
                                      Explore more survey types
                                    </span>
                                    <span className="">
                                      <CgArrowLongRight />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </ul>
                          )}
                        </div>
                      </li>
                      <li className="rounded-sm w-full mx-0 px-0">
                        <div className="flex flex-col">
                          <p
                            onClick={() =>
                              setIsResourcesOpen(
                                !isResourcesOpen,
                                setIsProductsOpen(false),
                                setIsSolutionOpen(false)
                              )
                            }
                            className={`flex justify-between px-4 py-5 mb-0 hover:text-base-100 rounded-b-none w-full ${isOpen ? " hover:bg-[#808B91]" : undefined
                              }`}
                          >
                            <span className="font-semibold text-xl">
                              Resources
                            </span>
                            <span>
                              {isResourcesOpen ? (
                                <MdKeyboardArrowUp className="text-3xl" />
                              ) : (
                                <MdKeyboardArrowDown className="text-3xl" />
                              )}
                            </span>
                          </p>
                          {isResourcesOpen && (
                            <ul className="w-full z-50 bg-[#808B91] rounded-none text-base-100 mt-[-11px]">
                              <div
                                className=" flex justify-between flex-col
                            border-0 rounded-none
                            "
                              >
                                <div className="flex flex-col w-full px-4 py-1">
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 py-1 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Resources
                                    </span>
                                    <span>
                                      Best practices for using surveys & survey
                                      data
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-1">
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 py-1 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Curiosity at Work
                                    </span>
                                    <span>
                                      Our blog about surveys, tips for business,
                                      & more
                                    </span>
                                  </Link>
                                </div>
                                <div className="flex flex-col w-full px-4 py-1">
                                  <Link
                                    to="/"
                                    className="hover:bg-gray-800 hover:text-base-100 py-1 rounded-sm"
                                  >
                                    <span className="font-semibold text-xl text-secondary block">
                                      Help Center
                                    </span>
                                    <span>
                                      Tutorials & how-to guides for using
                                      SurveyMonkey
                                    </span>
                                  </Link>
                                </div>
                                <Link className="pt-1 pb-6 flex items-center justify-end gap-x-1 text-secondary">
                                  <span className="hover:underline">
                                    Explore our 180+ survey templates
                                  </span>
                                  <span className="">
                                    <CgArrowLongRight />
                                  </span>
                                </Link>
                              </div>
                            </ul>
                          )}
                        </div>
                      </li>
                      <li className="rounded-sm w-full mx-0 px-0">
                        <div className="flex flex-col">
                          { isAdmin ? <Link
                            to="/setting"
                            className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
                          >
                            <span className="font-semibold text-xl text-secondary block">
                              Settings
                            </span>
                          </Link>:
                          <Link
                            to="/plans-pricing"
                            className=" px-4 py-5 mb-0 hover:text-base-100 rounded-b-none w-full font-semibold text-xl"
                          >
                            Plans & Pricing
                          </Link>}
                        </div>
                      </li>
                      <li className="rounded-sm w-full mx-0 px-0">
                        <div className="flex flex-col">
                          <AuthenticationButtons
                            setEmailOpen={setEmailOpen}
                            isEmailOpen={isEmailOpen}
                            handleLogOut={handleLogOut}
                            className={"w-full btn btn-primary my-2"}
                            classNameHide={"hidden"}
                            classNameDark={"bg-black"}
                          />
                        </div>
                      </li>
                    </div>
                  </ul>
                </>
              )}
            </>
          </div>
          <Link
            to="/"
            className="normal-case text-2xl font-semibold hidden md:hidden lg:flex items-center gap-x-1 text-primary"
          >
            <img
              src="https://i.postimg.cc/g0B4m5Yx/328398592-722462319318557-3877861333829960200-n.png"
              alt="logo"
              className="w-9 h-9"
            />
            <h3>SurveyBee</h3>
          </Link>
          {/* mobile view ends here*/}
        </div>
        <div className="navbar-center lg:hidden">
          <Link
            to="/"
            className="normal-case text-3xl font-semibold flex items-center gap-x-1 text-primary"
          >
            <img
              src="https://i.postimg.cc/g0B4m5Yx/328398592-722462319318557-3877861333829960200-n.png"
              alt="logo"
              className="w-9 h-9"
            />
            <h3>SurveyBee</h3>
          </Link>
        </div>

        {/*desktop view starts*/}
        <div
          className={`navbar-center hidden md:hidden lg:flex mx-auto ${activeUser?.user?.email ? "navbar-start" : undefined
            }`}
        >
          <ul className="menu menu-horizontal px-1">
            {/* for dashboard */}
            <li>
              {isAdmin ? <Link
                to="/dashboard"
                className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
              >
                <span className="font-semibold text-xl text-secondary block">
                  Dashboard
                </span>
              </Link> :
                <Link
                  to="/dashboard"
                  className={`${!activeUser?.user?.email ? "hidden" : "text-white"
                    }`}
                >
                  Dashboard
                </Link>}
            </li>
            <li className="">
              {isAdmin ? <Link
                to="/dashboard/manageusers"
                className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
              >
                <span className="font-semibold text-xl text-secondary block">
                  Manage Users
                </span>
              </Link> :
                <Link
                  to="/dashboard/mysurveys"
                  className={`${!activeUser?.user?.email ? "hidden" : "text-white"
                    }`}
                >
                  My Surveys
                </Link>}
            </li>
            {/* for dashboard */}
            <li
              tabIndex={0}
              className={`${activeUser?.user?.email ? "hidden" : undefined}`}
            >
              <p
                onClick={() =>
                  setIsProductsOpen(
                    !isProductsOpen,
                    setIsSolutionOpen(false),
                    setIsResourcesOpen(false)
                  )
                }
                className={`${activeUser?.user?.email ? "text-white" : "text-black"
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
                        to="/cx"
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
                        to="/apply"
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
            <li
              tabIndex={0}
              className={`${activeUser?.user?.email ? "hidden" : undefined}`}
            >
              <p
                onClick={() =>
                  setIsSolutionOpen(
                    !isSolutionOpen,
                    setIsProductsOpen(false),
                    setIsResourcesOpen(false)
                  )
                }
                className={`${activeUser?.user?.email ? "text-white" : "text-black"
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
                      <div className="px-4 py-4 rounded-sm flex flex-col">
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
                      <div className="px-4 py-4 rounded-sm flex flex-col">
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
                      <div className="px-4 py-4 rounded-sm flex flex-col">
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
            <li
              tabIndex={0}
              className={`${activeUser?.user?.email ? "hidden" : undefined}`}
            >
              <p
                onClick={() =>
                  setIsResourcesOpen(
                    !isResourcesOpen,
                    setIsProductsOpen(false),
                    setIsSolutionOpen(false)
                  )
                }
                className={`${activeUser?.user?.email ? "text-white" : "text-black"
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

              {isAdmin ? <Link
                to="/setting"
                className="hover:bg-gray-800 hover:text-base-100 px-4 py-4 rounded-sm"
              >
                <span className="font-semibold text-xl text-secondary block">
                  Settings
                </span>
              </Link> :
                <Link
                  to="/plans-pricing"
                  className={`${activeUser?.user?.email ? "text-white" : "text-black"
                    }`}
                >
                  Plans & Pricing
                </Link>}
            </li>
          </ul>
        </div>
        {/*desktop view ends*/}
        <div className="navbar-end gap-x-3 hidden md:flex h-full">
          <AuthenticationButtons
            setEmailOpen={setEmailOpen}
            isEmailOpen={isEmailOpen}
            handleLogOut={handleLogOut}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
