import React from 'react';
import { FcManager, FcVip, FcConferenceCall, FcLibrary, FcCurrencyExchange, FcMoneyTransfer } from "react-icons/fc";

const UserStatstics = () => {
  return (
    <div className=' '>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-4 mt-5 lg:px-8">
          <div className=" ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
              <div
                className=" grid grid-cols-3 justify-evenly rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#9595f9] text-white"
              >
                <div className=' col-span-1'>
                  <FcConferenceCall className='w-[70px] h-[70px] bg-white rounded-full'> </FcConferenceCall>
                </div>
                <div className="flex flex-col text-center  col-span-2  ">
                  <td className="order-last text-lg font-medium  text-white">
                    Total Users
                  </td>

                  <dd className=" text-4xl font-extrabold text-white  md:text-5xl">
                    1150
                  </dd>
                </div>
              </div>

              <div
                className=" grid grid-cols-3 justify-items-center rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#037d71]"
              >
                <div className=' col-span-1'>
                  <FcVip className='w-[70px] h-[70px] bg-white rounded-full'> </FcVip>
                </div>
                <div className="flex flex-col text-center  col-span-2  ">
                  <td className="order-last text-lg font-medium text-white">
                    Paid Users
                  </td>

                  <dd className="text-4xl font-extrabold text-white md:text-5xl">150</dd>
                </div>
              </div>

              <div
                className="grid grid-cols-3 justify-evenly rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#34495E]"
              >
                <div className=' col-span-1'>
                  <FcManager className='w-[70px] h-[70px] bg-white rounded-full '> </FcManager>
                </div>
                <div className="flex flex-col text-center col-span-2  ">
                  <td className="order-last text-lg font-medium text-white ">
                    Free Users
                  </td>

                  <dd className="text-4xl font-extrabold text-white md:text-5xl">1000</dd>
                </div>
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
                className="grid grid-cols-3 justify-evenly rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#9595f9]"
              >
                <div className=' col-span-1'>
                  <FcLibrary className='w-[70px] h-[70px] bg-white rounded-full '> </FcLibrary>
                </div>
                <div className="flex flex-col text-center col-span-2  ">
                  <td className="order-last text-lg font-medium text-white">
                    Total incame
                  </td>
                  <dd className="text-4xl font-extrabold text-white md:text-5xl">
                    5823$
                  </dd>
                </div>

              </div>
              <div
                className="grid grid-cols-3 justify-evenly rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#037d71]"
              >
                <div className=' col-span-1'>
                  <FcCurrencyExchange className='w-[70px] h-[70px] bg-white rounded-full '> </FcCurrencyExchange>
                </div>
                <div className="flex flex-col text-center col-span-2  ">
                  <td className="order-last text-lg font-medium text-white">
                    Last Month
                  </td>
                  <dd className="text-4xl font-extrabold text-white md:text-5xl">598$</dd>
                </div>
              </div>
              <div
                className="grid grid-cols-3 justify-evenly rounded-lg border border-gray-100 px-4 py-8 text-center bg-[#037d71]"
              >
                <div className=' col-span-1'>
                  <FcMoneyTransfer className='w-[70px] h-[70px] bg-white rounded-full '> </FcMoneyTransfer>
                </div>
                <div className="flex flex-col text-center col-span-2  ">
                  <td className="order-last text-lg font-medium text-white">
                    Last week
                  </td>
                  <dd className="text-4xl font-extrabold text-white md:text-5xl">280$</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserStatstics;