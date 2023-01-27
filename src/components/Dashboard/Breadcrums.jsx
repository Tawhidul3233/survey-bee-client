import React from "react";
import { Link } from "react-router-dom";

const Breadcrums = () => {
  return (
    <>
      <div className="text-2xl breadcrumbs">
        <ul>
          <li>
            <Link className="text-2xl text-secondary font-bold">Design</Link>
          </li>
          <li>
            <Link className="text-2xl text-secondary font-bold">Preview</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrums;
