import React from "react";

const ShareModal = () => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="Share-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-8/12 max-w-5xl">
          <label
            htmlFor="Share-modal"
            className="absolute right-6 top-4 font-bold"
          >
            ✕
          </label>
          <div className="flex">
            <div className="w-3/12">
              <h1>amination</h1>
            </div>
            <div className="w-7/12 mx-auto">
              <h1 className="text-4xl font-bold my-2">Share Your Survey</h1>
              <h3 className="text-2xl font-bold">Work better, together.</h3>
              <p className="py-4 mb-5">
                Easily share your survey to anyone with an email address and use
                permissions to choose what others can view and edit. You can
                give team members permission to make changes, edit, and analyze
                the results of your survey.
              </p>
              <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                <button className="px-6 py-2 border border-green-500 rounded-sm dark:text-green-500">
                  No Thanks
                </button>
                <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-yellow-500 font-bold dark:text-gray-50">
                  Take a Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
