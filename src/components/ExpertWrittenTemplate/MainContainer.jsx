import React from "react";

const MainContainer = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center capitalize font-semibold">
        Start with an expert-written template
      </h1>
      <p className="text-center my-4 w-1/2 mx-auto">
        Our sample survey templates make it easy for you to start collecting
        feedback in just minutes. Explore hundreds of questions across different
        survey types, all designed to get you accurate results you can rely on.
      </p>

      <div className="flex flex-row">
        <div className="basis-1/4 mx-5 bg-gray-600">
          <div className="grid justify-center">
            <h1>side bar</h1>
          </div>
        </div>
        <div className="basis-3/4 mx-5 bg-gray-600">
          <div className="grid justify-center">
            <h1>template</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
