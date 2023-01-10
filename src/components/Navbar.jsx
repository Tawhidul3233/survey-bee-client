import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:px-16 lg:pt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-5xl" />
          </label>
          {/* <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
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
            <a>
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
          <li tabIndex={0}>
            <a>
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
          <li tabIndex={0}>
            <a>
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
        </ul>
      </div>
      <div className="navbar-end gap-x-3 hidden md:flex">
        <Link to="/" className="text-xl text-black">
          Log in
        </Link>
        <Link to="/" className="btn btn-secondary normal-case lg:text-xl">
          Sign up free
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
