import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { user } from "../../features/userSlice";

const AuthenticationButtons = ({
  setEmailOpen,
  isEmailOpen,
  handleLogOut,
  className,
  classNameHide,
  classNameDark,
}) => {
  const activeUser = useSelector(user);

  return (
    <>
      {!activeUser?.user ? (
        <>
          <Link
            to="/login"
            className={`text-xl text-black font-semibold ${className}`}
          >
            Log in
          </Link>
          <Link
            to="/register"
            className={`btn btn-success normal-case lg:text-xl font-semibold ${className}`}
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
            } ${classNameDark} ${className}`}
          >
            <span className="hidden lg:block">{activeUser?.user?.email}</span>
            <span
              className="block lg:hidden hover:bg-base-200 hover:text-black w-full px-4 py-2 text-center"
              onClick={handleLogOut}
            >
              Sign out
            </span>
          </button>
          {isEmailOpen && (
            <ul
              className={`w-60 fixed right-3 top-20 z-50 bg-gray-900 text-white py-4 rounded-sm shadow-sm border border-secondary ${classNameHide}`}
            >
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
    </>
  );
};

export default AuthenticationButtons;
