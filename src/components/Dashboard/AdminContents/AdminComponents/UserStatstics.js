import React from 'react';

const UserStatstics = () => {
  return (
    <div className=''>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-24 md:py-12 lg:px-8">
          <div className=" ">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Users
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  85
                </dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium text-gray-500">
                  New Users
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">25</dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
              </div>
            </dl>
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
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total incame
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  850$
                </dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium text-gray-500">
                  24 Hours
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">25$</dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
              >
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserStatstics;