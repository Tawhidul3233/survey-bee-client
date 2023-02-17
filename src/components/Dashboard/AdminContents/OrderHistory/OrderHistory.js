import React, { useEffect, useState } from 'react';

const OrderHistory = () => {

  const [orders, setOrders] = useState([])
  // console.log(orders)

  useEffect(() => {
    fetch('https://survey-bee-server.vercel.app/buysurvey')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [orders])

  const [isApproved, setIsApproved] = useState(false);
  const handleApproval = () => {
    setIsApproved(true);
  }
  useEffect(() => {
    // Load the approved state from localStorage when the component mounts
    const isApproved = localStorage.getItem('isApproved');
    if (isApproved) {
      setIsApproved(true);
    }
  }, []);

  useEffect(() => {
    // Save the approved state to localStorage whenever it changes
    localStorage.setItem('isApproved', isApproved);
  }, [isApproved]);
  const [isRejected, setIsRejected] = useState(false);
  const handleRejected = () => {
    setIsRejected(true);
  }


  return (
    <div className='mb-20'>
      <h2 className='sm:mx-5 mx-2 text-base sm:text-xl font-semibold my-2 sm:my-5'>All Order History : </h2>
      <div className='mx-2 sm:mx-5'>
        {
          orders.map((order, i) =>
            <div key={order._id} order={order}
              className=" mb-4 w-[98%] sm:w-[80%] mx-auto border-2 p-5 rounded-sm"
            >
              <div>
                <p className='md:text-base text-xs bg-blue-600 py-1 px-3 text-white inline'>Order : {i + 1} </p>
              </div>
              <div className=' sm:flex justify-between mt-3 '>
                <p className='md:text-base text-xs'> Title : {order?.surveyTitle}</p>
                <p className='md:text-base text-xs'> Category : {order?.surveyCategory}</p>
                <p className='md:text-base text-xs'> User : {order?.email}</p>
              </div>
              <div className='text-xs font-light my-2'>
                Description : {order?.surveyDescription.slice(0, 250)}...
              </div>
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
              <div className=' flex justify-between my-3'>
                <p className=' font-semibold'> Total :  {order?.finalTotal.toFixed(2)}$ </p>
                <button onClick={handleRejected} disabled={isRejected} className=' btn btn-sm btn-error'>
                  {isRejected ? 'Rejected' : 'Reject'}
                </button>
                <button onClick={handleApproval} disabled={isApproved} className=' btn btn-sm btn-success'>{isApproved ? 'Approved' : 'Approve'}</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default OrderHistory;