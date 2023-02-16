import React from 'react';

const UserStatstics = () => {
  return (
    <div className=' '>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-24 md:py-12 lg:px-8">
          <div className=" ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#CCCCFF] text-white"
              >
                <td className="order-last text-lg font-medium  text-white">
                  Total Users
                </td>

                <dd className=" text-4xl font-extrabold text-white  md:text-5xl">
                  1150
                </dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#7FB3D5]"
              >
                <td className="order-last text-lg font-medium text-gray-500">
                  Paid Users
                </td>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">150</dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#5D6D7E]"
              >
                <td className="order-last text-lg font-medium text-gray-500">
                  Free Users
                </td>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">1000</dd>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6  lg:px-8">
          <div className="">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
              >
                <td className="order-last text-lg font-medium text-gray-500">
                  Total incame
                </td>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  1400$
                </dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
              >
                <td className="order-last text-lg font-medium text-gray-500">
                  Last Month
                </td>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">598$</dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
              >
                <td className="order-last text-lg font-medium text-gray-500">
                  Last week
                </td>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">280$</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserStatstics;