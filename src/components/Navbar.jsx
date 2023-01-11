import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
// import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 lg:px-16 lg:pt-4 shadow-md">
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
          <li>
            <p
              onClick={() =>
                setIsProductsOpen(
                  !isProductsOpen,
                  setIsSolutionOpen(false),
                  setIsResourcesOpen(false)
                )
              }
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
              <ul
                className="w-[70vw] flex justify-between flex-row
            fixed left-[15%] top-20 z-50 bg-[#FFFFFF] nav-subdiv-shadow mx-auto
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business apps</span>
                  </Link>
                </div>
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business apps</span>
                  </Link>
                </div>
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business apps</span>
                  </Link>
                </div>
              </ul>
            )}
          </li>
          <li>
            <p
              onClick={() =>
                setIsSolutionOpen(
                  !isSolutionOpen,
                  setIsProductsOpen(false),
                  setIsResourcesOpen(false)
                )
              }
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
              <ul
                className="w-[70vw] flex justify-between flex-row
            fixed left-[15%] top-20 z-50 bg-[#FFFFFF] nav-subdiv-shadow mx-auto
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business apps</span>
                  </Link>
                </div>
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business apps</span>
                  </Link>
                </div>
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business appss</span>
                  </Link>
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
              <ul
                className="w-[70vw] flex justify-between flex-row
            fixed left-[15%] top-20 z-50 bg-[#FFFFFF] nav-subdiv-shadow mx-auto
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business apps</span>
                  </Link>
                </div>
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business apps</span>
                  </Link>
                </div>
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
                      Empower your organization with our secure survey platform
                    </span>
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-800 hover:text-base-100 px-4 py-2 rounded-sm"
                  >
                    <span className="font-semibold text-xl text-secondary block">
                      Integrations & Plug-ins
                    </span>
                    <span>Bring survey insights into your business appsss</span>
                  </Link>
                </div>
              </ul>
            )}
          </li>
          <li>
            <Link to="/">Plans & Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-x-3 hidden md:flex">
        <Link to="/login" className="text-xl text-black">
          Log in
        </Link>
        <Link
          to="/register"

          className="btn btn-secondary normal-case lg:text-xl"
        >
          Sign up free
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
