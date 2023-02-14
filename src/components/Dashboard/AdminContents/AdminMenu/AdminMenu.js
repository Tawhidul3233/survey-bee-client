import React, { useState } from 'react';
import { FcViewDetails, FcPortraitMode, FcSettings } from "react-icons/fc";;

const AdminMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");
  return (
    <div className='  '>

      <div className="flex flex-col md:flex-row ">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none md:hidden flex"
        >
          <svg
            className="w-6 h-6 fill-current "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >

            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
          Dashboard
        </button>
        <nav
          className={`${menuOpen ? "block" : "hidden"
            } md:block bg-gray-200 p-4 md:p-6 md:w-64 rounded-br-box`}
        >
          <ul className="md:flex md:flex-col">
            <li
              className={`md:mt-4 ${activeItem === "Overview" ? "bg-green-500" : ""
                }`}
              onClick={() => {
                setActiveItem("Overview");
                setMenuOpen(false);
              }}
            >
              <a href="/dashboard" className="text-gray-800 hover:bg-gray-400 hover:text-white p-2 block rounded-sm">
                <FcViewDetails className=' inline-block mb-1'></FcViewDetails> Overview
              </a>
            </li>
            <li
              className={`md:mt-4 ${activeItem === "Users" ? "bg-green-500" : ""
                }`}
              onClick={() => {
                setActiveItem("Users");
                setMenuOpen(false);
              }}
            >
              <a href="/dashboard/manageusers" className="text-gray-800 hover:bg-gray-400 hover:text-white p-2 block rounded-sm">
                <FcPortraitMode className=' inline-block mb-1'> </FcPortraitMode> Manage user
              </a>
            </li>
            <li
              className={`md:mt-4 ${activeItem === "Settings" ? "bg-green-500" : ""
                }`}
              onClick={() => {
                setActiveItem("Settings");
                setMenuOpen(false);
              }}
            >
              <a href="#" className="text-gray-800 hover:bg-gray-400 hover:text-white p-2 block rounded-sm">
                <FcSettings className=' inline-block mb-1'> </FcSettings> Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="flex flex-col justify-between h-screen bg-white border-r">
        <div className="px-1 py-6">
          <div>
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
              <a
                href=" "
                className="flex items-center p-4 bg-white shrink-0 hover:bg-gray-50"
              >
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="object-cover h-14 w-14 sm:w-8 sm:h-8 rounded-full"
                />

                <div className="ml-1.5 hidden sm:block">
                  <p className="text-xs">
                    <strong className="block text-md lg:text-lg ">Code With Hope</strong>

                    <span  className=' text-[8px] lg:text-xs '> codewithhope606@gmail.com </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <nav aria-label="Main Nav" className="flex flex-col mt-6 space-y-1">
            <a
              href="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
            >
              <span className="ml-3 text-sm font-medium"> Overview </span>
            </a>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
              >
                <a href='/dashboard/manageusers' className="ml-3 text-sm font-medium"> Manage users </a>

                <span
                  className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                >
                </span>
              </summary>
            </details>

            <a
              href=" "
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium"> Billing </span>
            </a>

            <a
              href=" "
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3 text-sm font-medium"> Invoices </span>
            </a>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="ml-3 text-sm font-medium"> Account </span>

                <span
                  className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Account Nav" className="mt-1.5 ml-8 flex flex-col">
                <a
                  href=" "
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="ml-3 text-sm font-medium"> Details </span>
                </a>

                <a
                  href=" "
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="ml-3 text-sm font-medium"> Security </span>
                </a>

                <form action="/logout">
                  <button
                    type="submit"
                    className="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="ml-3 text-sm font-medium"> Logout </span>
                  </button>
                </form>
              </nav>
            </details>
          </nav>
        </div>
      </div> */}

    </div>
  );
};

export default AdminMenu;