import React from 'react';
import Countdown from 'react-countdown';

const EachUserOrder = ({order, i}) => {
  return (
    <div>
      <div key={order._id} order={order}
        className=" w-[98%] sm:w-[96%] mx-auto border-2 p-2 rounded-sm mb-2"
      >
        <div className='text-center'>
          <p className='md:text-base text-xs bg-blue-600 py-1 px-3 text-white inline '>History : {i + 1} </p>
        </div>
        <div className=' sm:flex justify-between mt-3 '>
          <p className='md:text-base text-xs'> Title : {order?.surveyTitle}</p>
          <p className='md:text-base text-xs'> Category : {order?.surveyCategory}</p>
          {/* <p className='md:text-base text-xs'> User : {order?.email}</p> */}
        </div>
        {/* <div className='text-xs font-light my-2'>
                    Description : {order?.surveyDescription.slice(0, 250)}...
                  </div> */}
        <div className='bg-gray-200 p-2'>
          <div className='sm:flex justify-between'>
            <p className='md:text-base text-xs'> Location : {order?.location} </p>
            <p className='md:text-base text-xs'>  Duration :  {order?.duration} </p>
            <p className='md:text-base text-xs'> Responses :  {order?.surveyAmount} </p>
          </div>
          <div className='sm:flex justify-between'>
            <p className='md:text-base text-xs'> Cost Per Respones : {order?.costEachSurvey}$ </p>
            <p className='md:text-base text-xs'> Sub Total :  {order?.subTotal.toFixed(2)}$ </p>
            <p className='md:text-base text-xs'> 15% VAT :  {order?.VATAmount.toFixed(2)}$ </p>

          </div>
        </div>
        <div className=' flex justify-between mt-2'>
          <p className=' font-semibold'> Total :  {order?.finalTotal.toFixed(2)}$ </p>
          <p>
            <>
              {



              }
            </>
            {
              order?.approve === true && <Countdown
                date={Date.now() + ( order?.duration === '7 Day' && 604800000 || order?.duration === '3 Day' && 259200000 || order?.duration === '24H' && 86400000 || order?.duration === '15 Day' && 1296000000 || order?.duration === '30 Day' && 2592000000 )}
              />
            }
          </p>

          <button className=' btn btn-sm btn-success'>
            {
              order?.approve === true ? " Services runing" : " Pending"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachUserOrder;