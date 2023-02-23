import React, { useState } from 'react';
import { FaBars, FaSearch, FaVideo, FaBell, FaUserCircle } from 'react-icons/fa';


function MenuTest() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white md:hidden"
            >
              <FaBars className="h-6 w-6" />
            </button>
            <a href="#" className="text-white font-bold text-xl ml-2">
              My App
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block flex-shrink-0">
              <button className="text-gray-500 hover:text-white focus:outline-none focus:text-white">
                <FaSearch className="h-6 w-6" />
              </button>
            </div>
            <div className="ml-4">
              <button className="text-gray-500 hover:text-white focus:outline-none focus:text-white">
                <FaVideo className="h-6 w-6" />
              </button>
            </div>
            <div className="ml-4">
              <button className="text-gray-500 hover:text-white focus:outline-none focus:text-white">
                <FaBell className="h-6 w-6" />
              </button>
            </div>
            <div className="ml-4">
              <button className="text-gray-500 hover:text-white focus:outline-none focus:text-white">
                <FaUserCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? '' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
            Trending
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
            Subscriptions
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
            Library
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MenuTest;
