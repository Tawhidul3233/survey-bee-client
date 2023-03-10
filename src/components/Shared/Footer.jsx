import React from "react";
import sponsor from "../../assets/images/icon/images.png";
import sponsor1 from "../../assets/images/icon/sponsor1.png";
const Footer = () => {
  return (
    <div className="p-10 bg-slate-100">
      <section className="ml-12 ">
        <select
          id="countries"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <div className="mt-2">
          <ul className="list-disc md:flex gap-6 text-xs">
            <li className="list-none">About Momentive</li>
            <li>Careers</li>
            <li>Developers</li>
            <li>Privacy Notice</li>
            <li>Bangladesh Privacy Notice</li>
            <li>Email OPt-in</li>
            <li>Hellp</li>
            <li>Cookies Notice</li>
            <li>Copyright © 1999-2023 Momentive</li>
            <li>Cookies Princes</li>
          </ul>
        </div>
        <div className=" md:flex md:gap-2 mt-4">
          <img className="w-28 h-10" src={sponsor} alt="" />
          <img className="w-28 h-10" src={sponsor1} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
